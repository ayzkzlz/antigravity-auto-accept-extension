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

To function properly, this extension requires Antigravity IDE to run with the Chrome DevTools Protocol enabled (`--remote-debugging-port=9000`). We provide a standalone installer to automate this process for you.

#### Step 1: Download the Installer
1. Go to the [Releases](https://github.com/ayzkzlz/antigravity-auto-accept-extension/releases) page on GitHub.
2. Download the latest **`Antigravity-AutoAccept-Installer.zip`** file.
3. Extract the downloaded `.zip` file into a folder (e.g., your Downloads or Desktop folder).

#### Step 2: Run the Setup Script
The folder contains setup scripts for both macOS and Windows. These scripts will automatically install the extension into your IDE and create a dedicated desktop shortcut.

**🍎 For macOS Users:**
1. Open the **Terminal** application.
2. Use the `cd` command to navigate to the folder where you extracted the zip file. For example:
   ```bash
   cd ~/Downloads/Antigravity-AutoAccept-Installer
   ```
3. Run the setup script using the following command:
   ```bash
   ./setup-mac.sh
   ```
   *(If you get a permission denied error, run `chmod +x setup-mac.sh` first).*
4. Once completed, you will see a new application named **`Antigravity with Auto Accept.app`** on your Desktop. You can drag this application to your Dock for easy access.

**🪟 For Windows Users:**
1. Open the extracted `Antigravity-AutoAccept-Installer` folder in File Explorer.
2. Locate the file named **`setup-windows.ps1`**.
3. Right-click on the file and select **Run with PowerShell**.
4. *(Note: If Windows prompts a security warning or asks about Execution Policies, type `Y` and press Enter to allow the script to run).*
5. Once completed, a new shortcut named **`Antigravity with Auto Accept.lnk`** will appear on your Desktop.

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

Bu eklentinin çalışabilmesi için Antigravity IDE'nin Chrome DevTools Protocol (`--remote-debugging-port=9000`) parametresi ile başlatılması zorunludur. İşinizi kolaylaştırmak adına tüm bu süreci otomatikleştiren bağımsız bir kurulum paketi sunuyoruz.

#### Adım 1: Kurulum Paketini İndirin
1. GitHub üzerindeki [Releases (Sürümler)](https://github.com/ayzkzlz/antigravity-auto-accept-extension/releases) sayfasına gidin.
2. En güncel **`Antigravity-AutoAccept-Installer.zip`** dosyasını indirin.
3. İndirdiğiniz bu `.zip` dosyasını bilgisayarınızda bir klasöre (Örn: İndirilenler veya Masaüstü) çıkartın.

#### Adım 2: Kurulum Betiğini (Script) Çalıştırın
Çıkarttığınız klasörün içinde hem macOS hem de Windows için kurulum betikleri (script) bulunur. Bu betikler eklentiyi IDE'nize otomatik olarak kuracak ve masaüstünüze özel bir kısayol bırakacaktır.

**🍎 macOS Kullanıcıları İçin:**
1. Mac'inizde **Terminal** uygulamasını açın.
2. `cd` komutunu kullanarak zip'ten çıkardığınız klasörün içine gidin. Örneğin:
   ```bash
   cd ~/Downloads/Antigravity-AutoAccept-Installer
   ```
3. Aşağıdaki komutu yazarak kurulum betiğini çalıştırın:
   ```bash
   ./setup-mac.sh
   ```
   *(Eğer "Permission denied" hatası alırsanız, önce `chmod +x setup-mac.sh` yazıp Enter'a basın).*
4. Kurulum saniyeler içinde bitecek ve masaüstünüzde **`Antigravity with Auto Accept.app`** isminde yeni bir uygulama oluşacaktır. İsterseniz kolay erişim için bu simgeyi Dock'unuza sürükleyebilirsiniz.

**🪟 Windows Kullanıcıları İçin:**
1. Zip'ten çıkardığınız `Antigravity-AutoAccept-Installer` klasörünü Dosya Gezgini'nde açın.
2. Klasör içindeki **`setup-windows.ps1`** dosyasını bulun.
3. Bu dosyaya sağ tıklayın ve **"PowerShell ile Çalıştır" (Run with PowerShell)** seçeneğine tıklayın.
4. *(Not: Eğer Windows güvenlik uyarısı verir veya "Execution Policy" ile ilgili bir soru sorarsa, `Y` tuşuna basıp Enter'a basarak scriptin çalışmasına izin verin).*
5. Kurulum saniyeler içinde bitecek ve masaüstünüzde **`Antigravity with Auto Accept.lnk`** isminde yeni bir kısayol belirecektir.

### Kullanım
1. **Eklentiyi kullanabilmek için Antigravity IDE'yi HER ZAMAN masaüstündeki bu yeni kısayoldan başlatın.**
2. Eklenti otomatik olarak devreye girecektir. Sağ alt köşedeki (Durum Çubuğu) `🟢 Auto-Accept: ON` ibaresini kontrol edin.
3. Ayarlarınızı (gecikme süresi, güvenlik) değiştirmek için durum çubuğundaki bu butona tıklayabilir veya Komut Paleti'ni (`Cmd+Shift+P` / `Ctrl+Shift+P`) açarak `Auto-Accept: Open Admin Panel` yazabilirsiniz.

### Geliştiriciler İçin
Koda katkıda bulunmak, projeyi kaynak kodundan derlemek veya yerel ortamda test etmek isterseniz lütfen [CONTRIBUTING.md](CONTRIBUTING.md) kılavuzunu inceleyin.
