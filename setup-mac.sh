#!/bin/zsh

# Setup Script for macOS
# This script installs the Auto-Accept extension and creates an AppleScript application that launches Antigravity IDE with the required remote-debugging port.

echo "Installing Antigravity Auto-Accept Extension..."

# Install the extension
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
VSIX_FILE="$SCRIPT_DIR/antigravity-auto-accept-1.0.0.vsix"

if [ -f "$VSIX_FILE" ]; then
    code --install-extension "$VSIX_FILE" --force
    if [ $? -ne 0 ]; then
        echo "Error: Failed to install the extension."
        exit 1
    fi
else
    echo "Error: Extension package (.vsix) not found in the current directory."
    exit 1
fi

echo "Creating Antigravity IDE (Auto-Accept) Desktop Shortcut..."

APP_NAME="Antigravity with Auto Accept.app"
DEST_PATH="$HOME/Desktop/$APP_NAME"

APPLESCRIPT_CODE='do shell script "open -a \"Antigravity IDE\" --args --remote-debugging-port=9000"'

osacompile -e "$APPLESCRIPT_CODE" -o "$DEST_PATH"

if [ $? -eq 0 ]; then
    echo "Success! A shortcut named '$APP_NAME' has been created on your Desktop."
    echo "To use the extension, please fully close the IDE (Cmd+Q) and launch it using this new shortcut."
else
    echo "Error: Failed to create the shortcut."
fi
