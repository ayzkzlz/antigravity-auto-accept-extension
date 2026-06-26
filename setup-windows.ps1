# Setup Script for Windows
# This script creates a Desktop shortcut for Antigravity IDE with the required remote-debugging port.

Write-Host "Antigravity IDE (Auto-Accept) Kısayolu Oluşturuluyor..."

$WshShell = New-Object -comObject WScript.Shell
$DesktopPath = [Environment]::GetFolderPath("Desktop")
$ShortcutPath = "$DesktopPath\Antigravity with Auto Accept.lnk"

# Orijinal IDE'nin yolunu bulmaya çalışıyoruz. Genellikle LocalAppData altında bulunur.
$AppPath = "$env:LocalAppData\Programs\antigravity-ide\Antigravity IDE.exe"

if (-Not (Test-Path $AppPath)) {
    # Eğer orada yoksa Program Files altına bakalım
    $AppPath = "$env:ProgramFiles\Antigravity IDE\Antigravity IDE.exe"
}

if (-Not (Test-Path $AppPath)) {
    Write-Host "Hata: Antigravity IDE bilgisayarınızda bulunamadı." -ForegroundColor Red
    Write-Host "Lütfen kısayolu kendiniz oluşturup hedefine '--remote-debugging-port=9000' ekleyin." -ForegroundColor Yellow
    Exit
}

$Shortcut = $WshShell.CreateShortcut($ShortcutPath)
$Shortcut.TargetPath = $AppPath
$Shortcut.Arguments = "--remote-debugging-port=9000"
$Shortcut.Save()

Write-Host "Başarılı! Masaüstünüze 'Antigravity with Auto Accept.lnk' adında bir kısayol oluşturuldu." -ForegroundColor Green
Write-Host "Eklentiyi kullanmak için IDE'yi artık bu yeni kısayoldan başlatabilirsiniz." -ForegroundColor White
