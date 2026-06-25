import * as vscode from 'vscode';
import * as http from 'http';
import WebSocket from 'ws';

export class CdpClient {
    private checkInterval: NodeJS.Timeout | null = null;
    private activeSockets: Map<string, WebSocket> = new Map();
    private isRunning = false;

    public start() {
        if (this.isRunning) return;
        this.isRunning = true;
        
        // Periyodik olarak hedefleri kontrol et
        this.checkInterval = setInterval(() => {
            this.fetchTargets();
        }, 3000);
        
        vscode.window.showInformationMessage('Auto-Accept (CDP 9000) başlatıldı. Bekleniyor...');
        this.fetchTargets();
    }

    public stop() {
        this.isRunning = false;
        if (this.checkInterval) {
            clearInterval(this.checkInterval);
            this.checkInterval = null;
        }

        // Tarayıcılara yerleştirdiğimiz tıklayıcı interval'i silmeleri için kod gönder
        const stopScript = `
            if (window._autoAcceptInterval) {
                clearInterval(window._autoAcceptInterval);
                delete window._autoAcceptInterval;
            }
        `;
        const message = JSON.stringify({
            id: Math.floor(Math.random() * 1000000),
            method: 'Runtime.evaluate',
            params: { expression: stopScript }
        });

        // Tüm aktif soketlere durdurma emrini gönder ve soketleri kapat
        this.activeSockets.forEach(ws => {
            if (ws.readyState === WebSocket.OPEN) {
                ws.send(message);
            }
            ws.close();
        });
        this.activeSockets.clear();

        vscode.window.showInformationMessage('Auto-Accept durduruldu.');
    }

    private hasShownError = false;

    private fetchTargets() {
        const req = http.get('http://127.0.0.1:9000/json/list', (res) => {
            let data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => {
                try {
                    const targets = JSON.parse(data);
                    targets.forEach((target: any) => {
                        // type kontrolünü genişletiyoruz (webview vs olabilir)
                        if (!this.activeSockets.has(target.id) && target.webSocketDebuggerUrl) {
                            vscode.window.showInformationMessage(`CDP: Yeni hedefe bağlanıldı -> ${target.type} (${target.title || 'İsimsiz'})`);
                            this.connectToTarget(target);
                        }
                    });
                } catch (e) {
                    console.error('Target parse error:', e);
                }
            });
        });

        req.on('error', (e) => {
            if (!this.hasShownError) {
                vscode.window.showErrorMessage(`CDP Hatası: 9000 portuna bağlanılamadı! (${e.message}). Lütfen launch.json içinde --remote-debugging-port=9000 olduğundan emin olun.`);
                this.hasShownError = true;
            }
        });
    }

    private connectToTarget(target: any) {
        const ws = new WebSocket(target.webSocketDebuggerUrl);
        this.activeSockets.set(target.id, ws);
        let pollingInterval: NodeJS.Timeout;

        ws.on('open', () => {
            // Node.js üzerinden her 500ms'de bir DOM kontrolü gönderiyoruz.
            // Bu sayede sayfa yenilense (reload) bile kod kaybolmaz, sürekli tıklar.
            const injectScript = () => {
                if (ws.readyState !== WebSocket.OPEN) return;

                const script = `
                    (() => {
                        if (!window._autoAcceptInterval) {
                            window._autoAcceptInterval = setInterval(() => {
                                // 1. Önce yapısal (class) özellikleri ile primary butonu arıyoruz
                                let targetBtn = document.querySelector('button.bg-accent.text-white');
                                
                                // 2. Bulunamazsa ikincil (fallback) metin araması devreye girer
                                if (!targetBtn) {
                                    const buttons = Array.from(document.querySelectorAll('button, vscode-button'));
                                    
                                    // Sık kullanılan onay kelimeleri (Farklı dilleri destekler)
                                    const keywords = [
                                        // English
                                        'submit', 'allow', 'yes', 'proceed', 'approve', 'continue', 'run',
                                        // Turkish
                                        'onayla', 'kabul et', 'gönder', 'devam et', 'evet', 'çalıştır',
                                        // German
                                        'senden', 'erlauben', 'ja', 'fortfahren', 'zulassen', 'bestätigen',
                                        // French
                                        'soumettre', 'autoriser', 'oui', 'continuer', 'approuver', 'valider',
                                        // Spanish
                                        'enviar', 'permitir', 'sí', 'continuar', 'aprobar', 'aceptar',
                                        // Italian
                                        'invia', 'consenti', 'sì', 'continua', 'approva', 'accetta',
                                        // Portuguese
                                        'sim', 'aprovar', 'aceitar',
                                        // Russian
                                        'отправить', 'разрешить', 'да', 'продолжить', 'одобрить', 'принять',
                                        // Japanese
                                        '送信', '許可', 'はい', '続行', '承認', '受け入れる',
                                        // Chinese
                                        '提交', '允许', '是', '继续', '批准', '接受'
                                    ];
                                    
                                    targetBtn = buttons.find(b => {
                                        // Metni alıp temizle (Örn: "Submit ↵" -> "submit")
                                        const text = (b.textContent || '').trim().toLowerCase().replace(/↵/g, '').trim();
                                        
                                        // Tam eşleşme veya kelime başlangıcı eşleşmesi arar ("Don't allow" gibi ters eşleşmeleri önler)
                                        return keywords.includes(text) || keywords.some(k => text.startsWith(k + ' '));
                                    });
                                }
                                
                                if (targetBtn && !targetBtn.disabled) {
                                    targetBtn.click();
                                }
                            }, 500);
                            return true;
                        }
                        return false;
                    })();
                `;

                const message = JSON.stringify({
                    id: Math.floor(Math.random() * 1000000),
                    method: 'Runtime.evaluate',
                    params: {
                        expression: script,
                        returnByValue: true
                    }
                });
                ws.send(message);
            };

            // Bağlanır bağlanmaz hiç beklemeden ilk scripti enjekte et (2 saniye bekleme hatasını çözer)
            injectScript();
            
            // Eğer sayfa yenilenirse script silineceği için her 2 saniyede bir eksik mi diye kontrol et
            pollingInterval = setInterval(injectScript, 2000);
        });

        ws.on('close', () => {
            this.activeSockets.delete(target.id);
            if (pollingInterval) clearInterval(pollingInterval);
        });

        ws.on('error', () => {
            this.activeSockets.delete(target.id);
            if (pollingInterval) clearInterval(pollingInterval);
        });
    }
}
