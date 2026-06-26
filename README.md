# Antigravity Auto-Accept Plugin

[English](#english) | [Türkçe](#türkçe)

---

## English

This extension is a tool that runs within the Antigravity IDE (VS Code), providing an administration panel (Webview) and auto-accept functionality.

### AI Skills Used and Reasons

The following AI (Antigravity) skills were utilized in building this project from scratch:

1. **`vscode-extension-guide-en`**
   - **Reason for Use**: Needed for best-practice guidance to establish the project skeleton, Webview architecture (CSP security settings, messaging), and generate the `.vsix` output. Without this skill, it would be difficult to create an extension compatible with the latest (1.74+) VS Code API features.

2. **`typescript-pro`** (Applied implicitly)
   - **Reason for Use**: Type-safe TypeScript was chosen to ensure the codebase is secure, extensible, and has a low error rate.

3. **`react-best-practices` / `frontend-design`** (Applied implicitly)
   - **Reason for Use**: To maintain a high user experience while building the administration panel interface and establish an HTML/CSS structure that aligns with the design aesthetics of Antigravity IDE (VS Code).

### Installation and Usage

#### 1. Shortcut Installation (Recommended)
For this extension to work, Antigravity IDE must be started with the `--remote-debugging-port=9000` parameter. You can easily create a ready-to-use shortcut on your desktop by running the setup scripts below that correspond to your operating system:

- **macOS Users:**
  Open the terminal, navigate to this project directory, and run the following command:
  ```bash
  sh setup-mac.sh
  ```
  You can start the IDE using the `Antigravity with Auto Accept.app` application created on your desktop. You may drag this application to the Dock if you wish.

- **Windows Users:**
  Right-click the `setup-windows.ps1` file in this project directory and select **"Run with PowerShell"**. A shortcut named `Antigravity with Auto Accept.lnk` containing the necessary parameters will be created on your desktop.

#### 2. Running the Extension
1. Run the `npm install` command in the project directory.
2. Make sure you open the Antigravity IDE using the custom shortcut you created.
3. Navigate to the **Run and Debug** tab from the left menu.
4. Click the green play button at the top (while "Run Extension" is selected) to open the Extension Development Host window.
5. Open the command palette (`Cmd+Shift+P` or `Ctrl+Shift+P`).
6. Run the `Auto-Accept: Open Admin Panel` command to display the administration panel.

---

## Türkçe

Bu eklenti, Antigravity IDE (VS Code) içerisinde çalışan, yönetim paneli barındıran (Webview) ve otomatik kabul (auto-accept) işlevselliği sunan bir araçtır. 

### Kullanılan AI Yetenekleri (Skills) ve Nedenleri

Bu projenin sıfırdan oluşturulması sürecinde aşağıdaki AI (Antigravity) yetenekleri (skills) kullanılmıştır:

1. **`vscode-extension-guide-en`**
   - **Neden Kullanıldı?**: Projenin iskeletini oluşturmak, Webview mimarisini kurmak (CSP güvenlik ayarları, mesajlaşma) ve `.vsix` çıktısı üretebilmek için gereken best-practice rehberliğine ihtiyaç duyulduğu için. Bu yetenek olmadan VS Code API'sinin güncel (1.74+) özelliklerine uygun bir eklenti çıkarmak zorlaşırdı.

2. **`typescript-pro`** (Zımni olarak uygulandı)
   - **Neden Kullanıldı?**: Kod tabanının güvenli, genişletilebilir ve hata oranının düşük olması için tip güvenli (type-safe) TypeScript tercih edildi. 

3. **`react-best-practices` / `frontend-design`** (Zımni olarak uygulandı)
   - **Neden Kullanıldı?**: Yönetim panelinin arayüzü oluşturulurken kullanıcı deneyimini yüksek tutmak ve Antigravity IDE'nin (VS Code) tasarım estetiğine uyumlu bir HTML/CSS yapısı kurmak için.

### Kurulum ve Çalıştırma

#### 1. Kısayol Kurulumu (Önerilen)
Bu eklentinin çalışabilmesi için Antigravity IDE'nin `--remote-debugging-port=9000` parametresi ile başlatılması zorunludur. İşletim sisteminize uygun olan aşağıdaki kurulum betiklerini (script) çalıştırarak masaüstünüze hazır bir kısayol oluşturabilirsiniz:

- **macOS Kullanıcıları:**
  Terminali açın, bu proje dizinine gidin ve şu komutu çalıştırın:
  ```bash
  sh setup-mac.sh
  ```
  Masaüstünüzde oluşan `Antigravity with Auto Accept.app` uygulamasını kullanarak IDE'yi başlatabilirsiniz. İsterseniz bu uygulamayı Dock'a sürükleyebilirsiniz.

- **Windows Kullanıcıları:**
  Bu proje dizinindeki `setup-windows.ps1` dosyasına sağ tıklayıp **"PowerShell ile Çalıştır"** diyerek çalıştırın. Masaüstünüzde gerekli parametreleri içeren `Antigravity with Auto Accept.lnk` kısayolu oluşacaktır.

#### 2. Eklentiyi Çalıştırma
1. Proje dizininde `npm install` komutunu çalıştırın.
2. Oluşturduğunuz özel kısayol ile Antigravity IDE'yi açtığınızdan emin olun.
3. Sol taraftaki menüden **Run and Debug** (Çalıştır ve Hata Ayıkla) sekmesine gidin.
4. Üstteki yeşil oynat butonuna basarak ("Run Extension" seçiliyken) Extension Development Host penceresini açın. (Mac'te Touch Bar veya klavye ayarlarına bağlı olarak `fn + F5` de yapabilirsiniz).
5. Komut paletini (`Cmd+Shift+P`) açın.
6. `Auto-Accept: Open Admin Panel` komutunu çalıştırarak yönetim panelini görüntüleyin.
