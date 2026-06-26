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

To function properly, this extension requires Antigravity IDE to run with the Chrome DevTools Protocol enabled (`--remote-debugging-port=9000`).

#### Step 1: Install the Extension
1. Go to the [Releases](https://github.com/ayzkzlz/antigravity-auto-accept-extension/releases) page on GitHub.
2. Download the latest **`antigravity-auto-accept-installer.zip`** file and extract it.
3. Open Antigravity IDE.
4. Go to the **Extensions** view (`Cmd+Shift+X` or `Ctrl+Shift+X`).
5. Click the `...` menu at the top right and select **Install from VSIX...**
6. Select the `antigravity-auto-accept-1.0.0.vsix` file from the extracted folder.

#### Step 2: Create the Desktop Shortcut
To make sure Antigravity IDE always launches with the correct port, we provide simple click-and-run shortcut generators.

**🍎 For macOS Users:**
1. In the extracted folder, double-click the **`setup-mac.command`** file.
2. A new application named **`Antigravity with Auto Accept.app`** will be created on your Desktop.
3. *(If macOS prevents it from running, right-click the file and select "Open").*
4. **Permission Denied Error?** If you get a permission or access error, you can fix it manually via Terminal:
   - Open Terminal.
   - Type `chmod +x ` (with a space at the end).
   - Drag and drop the `setup-mac.command` file into the Terminal window and press Enter.
   - Double-click the file again.

**🪟 For Windows Users:**
1. In the extracted folder, double-click the **`setup-windows.cmd`** file.
2. A new shortcut named **`Antigravity with Auto Accept.lnk`** will be created on your Desktop.

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

Bu eklentinin çalışabilmesi için Antigravity IDE'nin Chrome DevTools Protocol (`--remote-debugging-port=9000`) parametresi ile başlatılması zorunludur.

#### Adım 1: Eklentiyi Kurun
1. GitHub üzerindeki [Releases (Sürümler)](https://github.com/ayzkzlz/antigravity-auto-accept-extension/releases) sayfasına gidin.
2. En güncel **`antigravity-auto-accept-installer.zip`** dosyasını indirin ve bir klasöre çıkartın.
3. Antigravity IDE'yi açın.
4. **Eklentiler (Extensions)** sekmesine gidin (`Cmd+Shift+X` veya `Ctrl+Shift+X`).
5. Sağ üstteki `...` (üç nokta) menüsüne tıklayın ve **VSIX'ten Yükle... (Install from VSIX...)** seçeneğini seçin.
6. Zip'ten çıkardığınız klasördeki `antigravity-auto-accept-1.0.0.vsix` dosyasını seçin.

#### Adım 2: Masaüstü Kısayolunu Oluşturun
IDE'nin her zaman doğru portla açıldığından emin olmak için size tek tıklamayla çalışan kısayol oluşturucular sunuyoruz.

**🍎 macOS Kullanıcıları İçin:**
1. Zip'ten çıkardığınız klasörün içindeki **`setup-mac.command`** dosyasına çift tıklayın.
2. Masaüstünüzde **`Antigravity with Auto Accept.app`** isminde yeni bir uygulama oluşacaktır.
3. *(Eğer macOS güvenlik nedeniyle çalıştırmanızı engellerse, dosyaya sağ tıklayıp "Aç" seçeneğini seçin).*
4. **Erişim Engellendi (Permission Denied) Hatası Alırsanız:** Dosya izinlerini Terminal üzerinden manuel olarak çözebilirsiniz:
   - Terminal uygulamasını açın.
   - Terminale `chmod +x ` yazın (sonunda boşluk bıraktığınızdan emin olun).
   - Klasördeki `setup-mac.command` dosyasını farenizle tutup Terminal penceresinin içine sürükleyip bırakın ve Enter tuşuna basın.
   - Ardından dosyaya tekrar çift tıklayarak sorunsuz çalıştırabilirsiniz.

**🪟 Windows Kullanıcıları İçin:**
1. Zip'ten çıkardığınız klasörün içindeki **`setup-windows.cmd`** dosyasına çift tıklayın.
2. Masaüstünüzde **`Antigravity with Auto Accept.lnk`** isminde yeni bir kısayol oluşacaktır.

### Kullanım
1. **Eklentiyi kullanabilmek için Antigravity IDE'yi HER ZAMAN masaüstündeki bu yeni kısayoldan başlatın.**
2. Eklenti otomatik olarak devreye girecektir. Sağ alt köşedeki (Durum Çubuğu) `🟢 Auto-Accept: ON` ibaresini kontrol edin.
3. Ayarlarınızı (gecikme süresi, güvenlik) değiştirmek için durum çubuğundaki bu butona tıklayabilir veya Komut Paleti'ni (`Cmd+Shift+P` / `Ctrl+Shift+P`) açarak `Auto-Accept: Open Admin Panel` yazabilirsiniz.

### Geliştiriciler İçin
Koda katkıda bulunmak, projeyi kaynak kodundan derlemek veya yerel ortamda test etmek isterseniz lütfen [CONTRIBUTING.md](CONTRIBUTING.md) kılavuzunu inceleyin.
