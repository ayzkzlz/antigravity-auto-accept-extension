import * as vscode from 'vscode';
import { AdminPanel } from './panels/AdminPanel';
import { CdpClient } from './cdpClient';

let statusBarItem: vscode.StatusBarItem;
let cdpClient: CdpClient;

export function activate(context: vscode.ExtensionContext) {
  console.log('Antigravity Auto-Accept is now active!');

  // Open Panel Command
  let openPanelDisposable = vscode.commands.registerCommand('antigravity-auto-accept.openAdminPanel', () => {
    AdminPanel.render(context.extensionUri);
  });

  // Toggle Command
  let toggleDisposable = vscode.commands.registerCommand('antigravity-auto-accept.toggle', () => {
    const config = vscode.workspace.getConfiguration('antigravity-auto-accept');
    const currentState = config.get<boolean>('enabled');
    config.update('enabled', !currentState, vscode.ConfigurationTarget.Global);
  });

  // Status Bar Item (Toggle)
  statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
  statusBarItem.command = 'antigravity-auto-accept.toggle';
  context.subscriptions.push(statusBarItem);
  
  // Status Bar Item (Panel)
  let panelStatusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 99);
  panelStatusBarItem.command = 'antigravity-auto-accept.openAdminPanel';
  panelStatusBarItem.text = `$(settings-gear) Auto-Accept Panel`;
  panelStatusBarItem.tooltip = `Auto-Accept Ayarlarını Aç`;
  panelStatusBarItem.show();
  context.subscriptions.push(panelStatusBarItem);
  
  cdpClient = new CdpClient();
  
  updateStatusBarItem();

  // Listen for configuration changes
  context.subscriptions.push(vscode.workspace.onDidChangeConfiguration(e => {
    if (e.affectsConfiguration('antigravity-auto-accept.enabled')) {
      updateStatusBarItem();
    }
  }));

  context.subscriptions.push(openPanelDisposable, toggleDisposable);
}

function updateStatusBarItem() {
  const config = vscode.workspace.getConfiguration('antigravity-auto-accept');
  const isEnabled = config.get<boolean>('enabled');
  if (isEnabled) {
    statusBarItem.text = `Auto-Accept Kapat`;
    statusBarItem.tooltip = `Şu an AÇIK. Kapatmak için tıklayın.`;
    cdpClient.start();
  } else {
    statusBarItem.text = `Auto-Accept Aç`;
    statusBarItem.tooltip = `Şu an KAPALI. Açmak için tıklayın.`;
    cdpClient.stop();
  }
  statusBarItem.show();
}

export function deactivate() {
    if (cdpClient) {
        cdpClient.stop();
    }
}
