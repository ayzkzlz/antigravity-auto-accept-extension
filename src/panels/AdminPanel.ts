import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

export class AdminPanel {
  public static currentPanel: AdminPanel | undefined;
  private readonly _panel: vscode.WebviewPanel;
  private _disposables: vscode.Disposable[] = [];

  private constructor(panel: vscode.WebviewPanel, extensionUri: vscode.Uri) {
    this._panel = panel;

    // Set the webview's initial html content
    this._update(extensionUri);

    // Listen for when the panel is disposed
    // This happens when the user closes the panel or when the panel is closed programmatically
    this._panel.onDidDispose(() => this.dispose(), null, this._disposables);

    // Handle messages from the webview
    this._panel.webview.onDidReceiveMessage(
      message => {
        switch (message.command) {
          case 'saveSettings':
            const config = vscode.workspace.getConfiguration('antigravity-auto-accept');
            config.update('enabled', message.enabled, vscode.ConfigurationTarget.Global);
            config.update('delay', Number(message.delay), vscode.ConfigurationTarget.Global);
            vscode.window.showInformationMessage(`Auto-Accept Settings Saved!`);
            return;
        }
      },
      null,
      this._disposables
    );
  }

  public static render(extensionUri: vscode.Uri) {
    if (AdminPanel.currentPanel) {
      // If we already have a panel, show it.
      AdminPanel.currentPanel._panel.reveal(vscode.ViewColumn.One);
    } else {
      // Otherwise, create a new panel.
      const panel = vscode.window.createWebviewPanel(
        'adminPanel',
        'Auto-Accept Administration',
        vscode.ViewColumn.One,
        {
          // Enable javascript in the webview
          enableScripts: true,
          // And restrict the webview to only loading content from our extension's `src/webview` directory.
          localResourceRoots: [vscode.Uri.joinPath(extensionUri, 'src', 'webview')]
        }
      );

      AdminPanel.currentPanel = new AdminPanel(panel, extensionUri);
    }
  }

  public dispose() {
    AdminPanel.currentPanel = undefined;

    // Clean up our resources
    this._panel.dispose();

    while (this._disposables.length) {
      const x = this._disposables.pop();
      if (x) {
        x.dispose();
      }
    }
  }

  private _update(extensionUri: vscode.Uri) {
    const webview = this._panel.webview;
    const htmlPath = path.join(extensionUri.fsPath, 'src', 'webview', 'index.html');
    let htmlContent = '';
    
    try {
      htmlContent = fs.readFileSync(htmlPath, 'utf8');
      
      // Inject current settings
      const config = vscode.workspace.getConfiguration('antigravity-auto-accept');
      const delay = config.get<number>('delay', 1000);
      const enabled = config.get<boolean>('enabled', true);
      
      htmlContent = htmlContent.replace('id="delayInput" value="1000"', `id="delayInput" value="${delay}"`);
      if (!enabled) {
        htmlContent = htmlContent.replace('id="enabledSwitch" checked', 'id="enabledSwitch"');
      }
    } catch (e) {
      htmlContent = `<h1>Error loading admin panel UI</h1>`;
    }

    webview.html = htmlContent;
  }
}
