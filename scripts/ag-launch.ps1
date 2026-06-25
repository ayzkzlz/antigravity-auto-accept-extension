$StateFile = "$env:USERPROFILE\.antigravity_auto_accept_state"
$AntigravityExe = "$env:LOCALAPPDATA\Programs\Antigravity IDE\Antigravity IDE.exe"

if (!(Test-Path $AntigravityExe)) {
    Write-Host "Antigravity IDE bulunamadı: $AntigravityExe"
    exit 1
}

$IsOn = $false
if (Test-Path $StateFile) {
    $currentState = Get-Content -Path $StateFile
    if ($currentState -eq "true") {
        $IsOn = $true
    }
}

if ($IsOn) {
    Write-Host "Auto-Accept CDP portu AÇIK. IDE başlatılıyor..."
    Start-Process -FilePath $AntigravityExe -ArgumentList "--remote-debugging-port=9000"
} else {
    Write-Host "Auto-Accept CDP portu KAPALI. IDE normal başlatılıyor..."
    Start-Process -FilePath $AntigravityExe
}
