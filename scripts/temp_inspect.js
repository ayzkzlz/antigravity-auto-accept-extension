const http = require('http');
const WebSocket = require('ws');

http.get('http://127.0.0.1:9000/json/list', (res) => {
    let data = '';
    res.on('data', c => data += c);
    res.on('end', () => {
        const targets = JSON.parse(data);
        targets.forEach(t => {
            if (t.webSocketDebuggerUrl) {
                const ws = new WebSocket(t.webSocketDebuggerUrl);
                ws.on('open', () => {
                    const msg = JSON.stringify({
                        id: 1,
                        method: 'Runtime.evaluate',
                        params: {
                            expression: `Array.from(document.querySelectorAll('button, vscode-button, a[role="button"]')).map(b => b.outerHTML).join('\\n---btn---\\n')`,
                            returnByValue: true
                        }
                    });
                    ws.send(msg);
                });
                ws.on('message', (msg) => {
                    const response = JSON.parse(msg);
                    if (response.id === 1 && response.result?.result?.value) {
                        console.log('TARGET:', t.title);
                        console.log(response.result.result.value);
                    }
                    ws.close();
                });
                ws.on('error', () => {});
            }
        });
    });
}).on('error', (err) => console.error(err));
