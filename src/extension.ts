import * as vscode from 'vscode';
import { AdminPanel } from './panels/AdminPanel';

export function activate(context: vscode.ExtensionContext) {
  console.log('Antigravity Auto-Accept is now active!');

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand('antigravity-auto-accept.openAdminPanel', () => {
    // Reveal or create the admin panel
    AdminPanel.render(context.extensionUri);
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
