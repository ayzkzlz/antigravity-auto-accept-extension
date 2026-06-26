@echo off
echo Creating Antigravity IDE (Auto-Accept) Desktop Shortcut...

set "SCRIPT_VBS=%temp%\CreateShortcut.vbs"
set "SHORTCUT_PATH=%USERPROFILE%\Desktop\Antigravity with Auto Accept.lnk"

echo Set oWS = WScript.CreateObject("WScript.Shell") > "%SCRIPT_VBS%"
echo sLinkFile = "%SHORTCUT_PATH%" >> "%SCRIPT_VBS%"
echo Set oLink = oWS.CreateShortcut(sLinkFile) >> "%SCRIPT_VBS%"
echo oLink.TargetPath = "cmd.exe" >> "%SCRIPT_VBS%"
echo oLink.Arguments = "/c start """" ""code"" --remote-debugging-port=9000" >> "%SCRIPT_VBS%"
echo oLink.WindowStyle = 7 >> "%SCRIPT_VBS%"
echo oLink.IconLocation = "cmd.exe,0" >> "%SCRIPT_VBS%"
echo oLink.Save >> "%SCRIPT_VBS%"

cscript /nologo "%SCRIPT_VBS%"
del "%SCRIPT_VBS%"

echo.
echo Success! A shortcut named 'Antigravity with Auto Accept' has been created on your Desktop.
echo Please double-click it whenever you want to use the extension.
echo.
pause
