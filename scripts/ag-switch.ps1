param (
    [string]$Action
)

$StateFile = "$env:USERPROFILE\.antigravity_auto_accept_state"

if ($Action -eq "on") {
    Set-Content -Path $StateFile -Value "true"
    Write-Host "✅ Auto-Accept CDP Portu (9000) AÇIK konuma getirildi."
    Write-Host "Bir sonraki Antigravity IDE açılışınızda otomatik olarak portlu başlayacak."
} elseif ($Action -eq "off") {
    Set-Content -Path $StateFile -Value "false"
    Write-Host "❌ Auto-Accept CDP Portu (9000) KAPALI konuma getirildi."
    Write-Host "Bir sonraki Antigravity IDE açılışınızda normal şekilde başlayacak."
} else {
    Write-Host "Kullanım: .\ag-switch.ps1 [on|off]"
    
    # Mevcut durumu göster
    if (Test-Path $StateFile) {
        $currentState = Get-Content -Path $StateFile
        if ($currentState -eq "true") {
            Write-Host "Şu anki durum: AÇIK (ON)"
        } else {
            Write-Host "Şu anki durum: KAPALI (OFF)"
        }
    } else {
        Write-Host "Şu anki durum: KAPALI (OFF)"
    }
}
