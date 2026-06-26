# Setup Script for Windows
# This script installs the Auto-Accept extension and creates a Desktop shortcut for Antigravity IDE with the required remote-debugging port.

Write-Host "Installing Antigravity Auto-Accept Extension..."

$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Definition
$VsixFile = Join-Path $ScriptDir "antigravity-auto-accept-1.0.0.vsix"

if (Test-Path $VsixFile) {
    # Install the extension
    $installArgs = "--install-extension `"$VsixFile`" --force"
    Start-Process -FilePath "code" -ArgumentList $installArgs -Wait -NoNewWindow
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Error: Failed to install the extension." -ForegroundColor Red
        Exit
    }
} else {
    Write-Host "Error: Extension package (.vsix) not found in the current directory." -ForegroundColor Red
    Exit
}

Write-Host "Creating Antigravity IDE (Auto-Accept) Desktop Shortcut..."

$WshShell = New-Object -comObject WScript.Shell
$DesktopPath = [Environment]::GetFolderPath("Desktop")
$ShortcutPath = "$DesktopPath\Antigravity with Auto Accept.lnk"

# Try to find the IDE path
$AppPath = "$env:LocalAppData\Programs\antigravity-ide\Antigravity IDE.exe"

if (-Not (Test-Path $AppPath)) {
    # Check Program Files
    $AppPath = "$env:ProgramFiles\Antigravity IDE\Antigravity IDE.exe"
}

if (-Not (Test-Path $AppPath)) {
    Write-Host "Error: Antigravity IDE not found on your system." -ForegroundColor Red
    Write-Host "Please create a shortcut manually and add '--remote-debugging-port=9000' to the target." -ForegroundColor Yellow
    Exit
}

$Shortcut = $WshShell.CreateShortcut($ShortcutPath)
$Shortcut.TargetPath = $AppPath
$Shortcut.Arguments = "--remote-debugging-port=9000"
$Shortcut.Save()

Write-Host "Success! A shortcut named 'Antigravity with Auto Accept.lnk' has been created on your Desktop." -ForegroundColor Green
Write-Host "To use the extension, please fully close the IDE and launch it using this new shortcut." -ForegroundColor White
