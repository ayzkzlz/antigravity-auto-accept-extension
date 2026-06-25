import * as vscode from 'vscode';
import { AdminPanel } from './panels/AdminPanel';
import { CdpClient } from './cdpClient';

let statusBarItem: vscode.StatusBarItem;
let cdpClient: CdpClient;

let extensionContext: vscode.ExtensionContext;

export function activate(context: vscode.ExtensionContext) {
  extensionContext = context;
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
  
  // Status Bar Item (Panel)
  let panelStatusBarItem = vscode.window.createStatusBarItem('antigravity.autoAcceptPanel', vscode.StatusBarAlignment.Right, 99);
  panelStatusBarItem.command = 'antigravity-auto-accept.openAdminPanel';
  panelStatusBarItem.text = `$(settings-gear) Auto-Accept Panel`;
  panelStatusBarItem.tooltip = `Open Auto-Accept Settings`;
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
  
  // Güvence altına almak için her 5 saniyede bir görünürlüğünü zorla
  setInterval(() => {
    if (statusBarItem) {
      statusBarItem.show();
    }
  }, 5000);
}

function updateStatusBarItem() {
  try {
    if (statusBarItem) {
      statusBarItem.dispose(); // Eski butonu tamamen yok et
    }
    
    // Yepyeni bir buton oluştur
    statusBarItem = vscode.window.createStatusBarItem('antigravity.autoAcceptToggle', vscode.StatusBarAlignment.Right, 100);
    statusBarItem.command = 'antigravity-auto-accept.toggle';
    extensionContext.subscriptions.push(statusBarItem);
    
    const config = vscode.workspace.getConfiguration('antigravity-auto-accept');
    const isEnabled = config.get<boolean>('enabled');
    if (isEnabled) {
      statusBarItem.text = `🟢 Auto-Accept: ON`;
      statusBarItem.tooltip = `Currently ENABLED. Click to Disable.`;
      cdpClient.start();
    } else {
      statusBarItem.text = `🔴 Auto-Accept: OFF`;
      statusBarItem.tooltip = `Currently DISABLED. Click to Enable.`;
      cdpClient.stop();
    }
    statusBarItem.show();
    
    if (AdminPanel.currentPanel) {
      AdminPanel.currentPanel.updateState(!!isEnabled);
    }
  } catch (error: any) {
    vscode.window.showErrorMessage('Auto-Accept Status Bar Error: ' + error.message);
    if (statusBarItem) statusBarItem.show();
  }
}

export function deactivate() {
    if (cdpClient) {
        cdpClient.stop();
    }
}
