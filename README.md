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

To function properly, this extension requires Antigravity IDE to run with the Chrome DevTools Protocol enabled (`--remote-debugging-port=9000`). We provide automated scripts to make this seamless for you.

#### Step 1: Install the Extension
1. Go to the [Releases](https://github.com/ayzkzlz/antigravity-auto-accept-extension/releases) page on GitHub.
2. Download the latest `.vsix` file (e.g., `v1.0.0`).
3. Open Antigravity IDE, go to the **Extensions** view (`Cmd+Shift+X` or `Ctrl+Shift+X`).
4. Click the `...` menu at the top right and select **Install from VSIX...**.
5. Choose the downloaded `.vsix` file.

#### Step 2: Create the Dedicated Shortcut (Required)
To automatically enable the required debugging port, please run the setup script for your Operating System:

- **macOS Users:**
  Open your Terminal, navigate to the folder where you downloaded the extension scripts, and run:
  ```bash
  sh setup-mac.sh
  ```
  This will create a dedicated `Antigravity with Auto Accept.app` on your Desktop. You can drag this to your Dock. **Always launch the IDE using this app to use the extension.**

- **Windows Users:**
  Right-click the `setup-windows.ps1` file and select **Run with PowerShell**. A shortcut named `Antigravity with Auto Accept.lnk` will appear on your Desktop. **Always launch the IDE using this shortcut to use the extension.**

### Usage
1. Launch Antigravity IDE via your newly created **Antigravity with Auto Accept** shortcut.
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

Bu eklentinin çalışabilmesi için Antigravity IDE'nin Chrome DevTools Protocol (`--remote-debugging-port=9000`) parametresi ile başlatılması zorunludur. İşinizi kolaylaştırmak adına size otomatik kurulum betikleri sunuyoruz.

#### Adım 1: Eklentiyi Yükleyin
1. GitHub üzerindeki [Releases (Sürümler)](https://github.com/ayzkzlz/antigravity-auto-accept-extension/releases) sayfasına gidin.
2. En güncel `.vsix` dosyasını indirin (Örn: `v1.0.0`).
3. Antigravity IDE'yi açın ve **Eklentiler (Extensions)** sekmesine gidin (`Cmd+Shift+X` veya `Ctrl+Shift+X`).
4. Sağ üstteki `...` (üç nokta) menüsüne tıklayın ve **VSIX'ten Yükle... (Install from VSIX...)** seçeneğini seçin.
5. İndirdiğiniz `.vsix` dosyasını seçip kurulumu tamamlayın.

#### Adım 2: Özel Kısayolu Oluşturun (Zorunlu)
IDE'nin gerekli port ayarlarıyla açılabilmesi için işletim sisteminize uygun olan aşağıdaki kurulum betiklerini (script) çalıştırarak masaüstünüze hazır bir kısayol oluşturmalısınız:

- **macOS Kullanıcıları:**
  Terminali açın, scriptlerin bulunduğu dizine gidin ve şu komutu çalıştırın:
  ```bash
  sh setup-mac.sh
  ```
  Masaüstünüzde `Antigravity with Auto Accept.app` uygulaması oluşacaktır. İsterseniz bu uygulamayı Dock'a sürükleyebilirsiniz. **Eklentiyi kullanmak için IDE'yi her zaman bu uygulamadan başlatmalısınız.**

- **Windows Kullanıcıları:**
  `setup-windows.ps1` dosyasına sağ tıklayıp **"PowerShell ile Çalıştır"** diyerek çalıştırın. Masaüstünüzde `Antigravity with Auto Accept.lnk` kısayolu oluşacaktır. **Eklentiyi kullanmak için IDE'yi her zaman bu kısayoldan başlatmalısınız.**

### Kullanım
1. Antigravity IDE'yi yeni oluşturduğunuz **Antigravity with Auto Accept** kısayolu üzerinden başlatın.
2. Eklenti otomatik olarak devreye girecektir. Sağ alt köşedeki (Durum Çubuğu) `🟢 Auto-Accept: ON` ibaresini kontrol edin.
3. Ayarlarınızı (gecikme süresi, güvenlik) değiştirmek için durum çubuğundaki bu butona tıklayabilir veya Komut Paleti'ni (`Cmd+Shift+P` / `Ctrl+Shift+P`) açarak `Auto-Accept: Open Admin Panel` yazabilirsiniz.

### Geliştiriciler İçin
Koda katkıda bulunmak, projeyi kaynak kodundan derlemek veya yerel ortamda test etmek isterseniz lütfen [CONTRIBUTING.md](CONTRIBUTING.md) kılavuzunu inceleyin.
