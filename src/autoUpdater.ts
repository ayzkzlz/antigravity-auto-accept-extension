import * as vscode from 'vscode';
import * as https from 'https';
import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';

export class AutoUpdater {
    private static readonly REPO_URL = 'https://api.github.com/repos/ayzkzlz/antigravity-auto-accept-extension/releases/latest';
    private static intervalId: NodeJS.Timeout | null = null;
    private static isUpdating = false;

    public static startPolling(context: vscode.ExtensionContext) {
        // İlk açılışta kontrol et
        this.checkForUpdates(context);

        // Her 4 saatte bir kontrol et (4 * 60 * 60 * 1000)
        this.intervalId = setInterval(() => {
            this.checkForUpdates(context);
        }, 4 * 60 * 60 * 1000);
    }

    public static stopPolling() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }

    private static async checkForUpdates(context: vscode.ExtensionContext) {
        if (this.isUpdating) return;

        try {
            const currentVersion = context.extension.packageJSON.version;
            const releaseInfo = await this.fetchLatestRelease();

            if (!releaseInfo || !releaseInfo.tag_name) return;

            const latestVersion = releaseInfo.tag_name.replace(/^v/, ''); // 'v1.0.2' -> '1.0.2'

            // Basit versiyon karşılaştırması
            if (this.isNewerVersion(latestVersion, currentVersion)) {
                const asset = releaseInfo.assets.find((a: any) => a.name.endsWith('.vsix'));
                if (asset) {
                    this.promptUpdate(asset.browser_download_url, latestVersion);
                }
            }
        } catch (error) {
            console.error('Update check failed:', error);
        }
    }

    private static fetchLatestRelease(): Promise<any> {
        return new Promise((resolve, reject) => {
            const options = {
                headers: {
                    'User-Agent': 'Antigravity-Auto-Accept-Updater'
                }
            };

            https.get(this.REPO_URL, options, (res) => {
                // Yönlendirmeleri (Redirect) takip et
                if (res.statusCode === 301 || res.statusCode === 302) {
                    https.get(res.headers.location!, options, (redirectRes) => this.handleResponse(redirectRes, resolve, reject)).on('error', reject);
                    return;
                }
                this.handleResponse(res, resolve, reject);
            }).on('error', reject);
        });
    }

    private static handleResponse(res: any, resolve: Function, reject: Function) {
        let data = '';
        res.on('data', (chunk: string) => data += chunk);
        res.on('end', () => {
            try {
                resolve(JSON.parse(data));
            } catch (e) {
                reject(e);
            }
        });
    }

    private static isNewerVersion(latest: string, current: string): boolean {
        const lParts = latest.split('.').map(Number);
        const cParts = current.split('.').map(Number);
        
        for (let i = 0; i < Math.max(lParts.length, cParts.length); i++) {
            const l = lParts[i] || 0;
            const c = cParts[i] || 0;
            if (l > c) return true;
            if (l < c) return false;
        }
        return false;
    }

    private static async promptUpdate(downloadUrl: string, version: string) {
        this.isUpdating = true;
        
        // Önce indir
        const destPath = path.join(os.tmpdir(), `antigravity-auto-accept-extension-${version}.vsix`);
        
        try {
            await this.downloadFile(downloadUrl, destPath);
            
            // Kullanıcıya sor
            const selection = await vscode.window.showInformationMessage(
                `A new version of Auto-Accept (v${version}) is available. Would you like to install it and reload the IDE?`,
                'Update'
            );

            if (selection === 'Update') {
                // Kurulumu başlat
                await vscode.commands.executeCommand('workbench.extensions.installExtension', vscode.Uri.file(destPath));
                
                // Reload iste
                vscode.commands.executeCommand('workbench.action.reloadWindow');
            }
        } catch (error) {
            console.error('Download or install failed:', error);
        } finally {
            this.isUpdating = false;
        }
    }

    private static downloadFile(url: string, dest: string): Promise<void> {
        return new Promise((resolve, reject) => {
            const file = fs.createWriteStream(dest);
            const request = https.get(url, (response) => {
                if (response.statusCode === 301 || response.statusCode === 302) {
                    // Yönlendirmeyi takip et (GitHub Releases redirect atar)
                    https.get(response.headers.location!, (redirectResponse) => {
                        redirectResponse.pipe(file);
                        file.on('finish', () => {
                            file.close();
                            resolve();
                        });
                    }).on('error', (err) => {
                        fs.unlink(dest, () => reject(err));
                    });
                    return;
                }

                response.pipe(file);
                file.on('finish', () => {
                    file.close();
                    resolve();
                });
            }).on('error', (err) => {
                fs.unlink(dest, () => reject(err));
            });
        });
    }
}
