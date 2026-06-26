#!/bin/zsh

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
