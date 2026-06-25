#!/usr/bin/env zsh

STATE_FILE="$HOME/.antigravity_auto_accept_state"

if [[ "$1" == "on" ]]; then
    echo "true" > "$STATE_FILE"
    echo "✅ Auto-Accept CDP Portu (9000) AÇIK konuma getirildi."
    echo "Bir sonraki Antigravity IDE açılışınızda otomatik olarak portlu başlayacak."
elif [[ "$1" == "off" ]]; then
    echo "false" > "$STATE_FILE"
    echo "❌ Auto-Accept CDP Portu (9000) KAPALI konuma getirildi."
    echo "Bir sonraki Antigravity IDE açılışınızda normal şekilde başlayacak."
else
    echo "Kullanım: ./ag-switch.sh [on|off]"
    
    # Mevcut durumu göster
    if [[ -f "$STATE_FILE" ]] && [[ $(cat "$STATE_FILE") == "true" ]]; then
        echo "Şu anki durum: AÇIK (ON)"
    else
        echo "Şu anki durum: KAPALI (OFF)"
    fi
fi
