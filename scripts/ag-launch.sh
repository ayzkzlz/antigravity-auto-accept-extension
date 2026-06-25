#!/usr/bin/env zsh

STATE_FILE="$HOME/.antigravity_auto_accept_state"

if [[ -f "$STATE_FILE" ]] && [[ $(cat "$STATE_FILE") == "true" ]]; then
    echo "Auto-Accept CDP portu AÇIK. IDE başlatılıyor..."
    open -a "Antigravity IDE" --args --remote-debugging-port=9000
else
    echo "Auto-Accept CDP portu KAPALI. IDE normal başlatılıyor..."
    open -a "Antigravity IDE"
fi
