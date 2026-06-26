#!/bin/zsh

echo "Building Antigravity Auto-Accept Standalone Release..."

# Derleme işlemi
npm run compile
if [ $? -ne 0 ]; then
    echo "Error: Compilation failed!"
    exit 1
fi

# Package via VSCE
echo "Packaging extension..."
npx vsce package
if [ $? -ne 0 ]; then
    echo "Error: Packaging failed!"
    exit 1
fi

# En son oluşan vsix dosyasını bul (ör. antigravity-auto-accept-extension-0.0.1.vsix)
VSIX_FILE=$(ls *.vsix | sort -V | tail -n 1)

if [ -z "$VSIX_FILE" ]; then
    echo "Error: No .vsix file generated!"
    exit 1
fi

# Release klasörü oluştur
RELEASE_DIR="Antigravity-AutoAccept-Installer"
rm -rf "$RELEASE_DIR"
mkdir -p "$RELEASE_DIR"

# Dosyaları kopyala
cp "$VSIX_FILE" "$RELEASE_DIR/antigravity-auto-accept-1.0.0.vsix"
cp setup-mac.sh "$RELEASE_DIR/"
cp setup-windows.ps1 "$RELEASE_DIR/"

# Çalıştırılabilir izinleri ayarla
chmod +x "$RELEASE_DIR/setup-mac.sh"

# Zip oluştur
echo "Zipping the release package..."
zip -r "${RELEASE_DIR}.zip" "$RELEASE_DIR"

# Temizlik
rm -rf "$RELEASE_DIR"

echo "Success! Release package created at: ${RELEASE_DIR}.zip"
