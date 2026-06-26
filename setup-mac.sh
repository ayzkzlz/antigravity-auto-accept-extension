#!/bin/zsh

# Setup Script for macOS
# This script creates an AppleScript application that launches Antigravity IDE with the required remote-debugging port.

echo "Antigravity IDE (Auto-Accept) Kısayolu Oluşturuluyor..."

# Hedef Uygulama Adı
APP_NAME="Antigravity with Auto Accept.app"

# Kısayolun oluşturulacağı yer (Masaüstü)
DEST_PATH="$HOME/Desktop/$APP_NAME"

# AppleScript kodumuz: Uygulamayı açarken gerekli argümanları iletiyor.
APPLESCRIPT_CODE='do shell script "open -a \"Antigravity IDE\" --args --remote-debugging-port=9000"'

# osacompile komutu ile doğrudan .app paketini oluşturuyoruz.
osacompile -e "$APPLESCRIPT_CODE" -o "$DEST_PATH"

if [ $? -eq 0 ]; then
    echo "Başarılı! Masaüstünüze '$APP_NAME' adında bir kısayol oluşturuldu."
    echo "Eklentiyi kullanmak için IDE'yi artık bu yeni kısayoldan başlatabilirsiniz."
else
    echo "Hata: Kısayol oluşturulamadı."
fi
