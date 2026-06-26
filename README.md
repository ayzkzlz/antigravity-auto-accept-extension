# Antigravity Auto-Accept Extension

[English](#english) | [Türkçe](#türkçe)

---

## English

Welcome to the **Antigravity Auto-Accept** extension for Antigravity IDE (VS Code). This extension provides a sleek administration panel (Webview) and intelligent auto-accept functionality for background operations.

### Features
- **Auto-Accept Core**: Automatically approves pending background tasks in Antigravity IDE without interrupting your workflow.
- **Admin Panel**: A beautiful, modern UI to toggle settings on the fly.
- **Dangerous Command Blacklist**: Intelligent regex-based detection blocks destructive commands (e.g., `rm`, `sudo`) from being auto-accepted, keeping your system safe.
- **Background Auto-Updater**: Stays automatically up-to-date with the latest features from GitHub Releases.

### Installation

To function properly, this extension requires Antigravity IDE to run with the Chrome DevTools Protocol enabled (`--remote-debugging-port=9000`). We provide a standalone installer to make this seamless for you.

#### Quick Setup
1. Go to the [Releases](https://github.com/ayzkzlz/antigravity-auto-accept-extension/releases) page on GitHub.
2. Download the latest `Antigravity-AutoAccept-Installer.zip` and extract it.
3. Run the setup script for your Operating System:
   - **macOS Users:** Open Terminal, navigate to the extracted folder, and run `./setup-mac.sh`.
   - **Windows Users:** Right-click `setup-windows.ps1` and select **Run with PowerShell**.
4. The script will automatically install the extension into your IDE and create an `Antigravity with Auto Accept` shortcut on your Desktop.

### Usage
1. **Always launch Antigravity IDE via your newly created shortcut.**
2. The extension will start automatically. Look for the `🟢 Auto-Accept: ON` indicator in your Status Bar.
3. Click the Status Bar indicator, or open the Command Palette (`Cmd+Shift+P` / `Ctrl+Shift+P`) and type `Auto-Accept: Open Admin Panel` to configure your delay and security settings.

### For Developers
If you want to contribute, compile from source, or test changes, please refer to the [CONTRIBUTING.md](CONTRIBUTING.md) guide.

---

## Türkçe

Antigravity IDE (VS Code) için geliştirilmiş **Antigravity Auto-Accept** eklentisine hoş geldiniz. Bu eklenti, arka plan işlemlerini otomatik olarak onaylayan akıllı bir altyapı ve şık bir yönetim paneli (Webview) sunar.

### Özellikler
- **Otomatik Onay (Auto-Accept)**: Antigravity IDE içindeki bekleyen arka plan görevlerini iş akışınızı bölmeden otomatik olarak onaylar.
- **Yönetim Paneli (Admin Panel)**: Ayarlarınızı anında değiştirebileceğiniz modern ve kullanıcı dostu bir arayüz.
- **Tehlikeli Komut Koruması (Blacklist)**: `rm`, `sudo` gibi yıkıcı komutları regex (düzenli ifade) altyapısıyla tespit ederek otomatik onaylanmasını engeller ve sisteminizi korur.
- **Otomatik Güncelleyici (Auto-Updater)**: GitHub Releases üzerinden her 4 saatte bir güncellemeleri kontrol eder ve eklentinin her zaman en güncel sürümde kalmasını sağlar.

### Kurulum

Bu eklentinin çalışabilmesi için Antigravity IDE'nin Chrome DevTools Protocol (`--remote-debugging-port=9000`) parametresi ile başlatılması zorunludur. İşinizi kolaylaştırmak adına size otomatik bir kurulum paketi sunuyoruz.

#### Hızlı Kurulum
1. GitHub üzerindeki [Releases (Sürümler)](https://github.com/ayzkzlz/antigravity-auto-accept-extension/releases) sayfasına gidin.
2. En güncel `Antigravity-AutoAccept-Installer.zip` dosyasını indirin ve zip'ten çıkarın.
3. Çıkardığınız klasörün içinden işletim sisteminize uygun olan kurulum betiğini (script) çalıştırın:
   - **macOS Kullanıcıları:** Terminali açın, klasörün içine girip `./setup-mac.sh` komutunu çalıştırın.
   - **Windows Kullanıcıları:** `setup-windows.ps1` dosyasına sağ tıklayıp **"PowerShell ile Çalıştır"** seçeneğini seçin.
4. Kurulum aracı eklentiyi IDE'nize otomatik olarak kuracak ve masaüstünüze **Antigravity with Auto Accept** adında sihirli bir kısayol bırakacaktır.

### Kullanım
1. **Eklentiyi kullanabilmek için Antigravity IDE'yi HER ZAMAN masaüstündeki bu yeni kısayoldan başlatın.**
2. Eklenti otomatik olarak devreye girecektir. Sağ alt köşedeki (Durum Çubuğu) `🟢 Auto-Accept: ON` ibaresini kontrol edin.
3. Ayarlarınızı (gecikme süresi, güvenlik) değiştirmek için durum çubuğundaki bu butona tıklayabilir veya Komut Paleti'ni (`Cmd+Shift+P` / `Ctrl+Shift+P`) açarak `Auto-Accept: Open Admin Panel` yazabilirsiniz.

### Geliştiriciler İçin
Koda katkıda bulunmak, projeyi kaynak kodundan derlemek veya yerel ortamda test etmek isterseniz lütfen [CONTRIBUTING.md](CONTRIBUTING.md) kılavuzunu inceleyin.
