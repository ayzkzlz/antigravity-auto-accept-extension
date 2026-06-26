# Antigravity Auto-Accept Plugin

Bu eklenti, Antigravity IDE (VS Code) içerisinde çalışan, yönetim paneli barındıran (Webview) ve otomatik kabul (auto-accept) işlevselliği sunan bir araçtır. 

## Kullanılan AI Yetenekleri (Skills) ve Nedenleri

Bu projenin sıfırdan oluşturulması sürecinde aşağıdaki AI (Antigravity) yetenekleri (skills) kullanılmıştır:

1. **`vscode-extension-guide-en`**
   - **Neden Kullanıldı?**: Projenin iskeletini oluşturmak, Webview mimarisini kurmak (CSP güvenlik ayarları, mesajlaşma) ve `.vsix` çıktısı üretebilmek için gereken best-practice rehberliğine ihtiyaç duyulduğu için. Bu yetenek olmadan VS Code API'sinin güncel (1.74+) özelliklerine uygun bir eklenti çıkarmak zorlaşırdı.

2. **`typescript-pro`** (Zımni olarak uygulandı)
   - **Neden Kullanıldı?**: Kod tabanının güvenli, genişletilebilir ve hata oranının düşük olması için tip güvenli (type-safe) TypeScript tercih edildi. 

3. **`react-best-practices` / `frontend-design`** (Zımni olarak uygulandı)
   - **Neden Kullanıldı?**: Yönetim panelinin arayüzü oluşturulurken kullanıcı deneyimini yüksek tutmak ve Antigravity IDE'nin (VS Code) tasarım estetiğine uyumlu bir HTML/CSS yapısı kurmak için.

## Kurulum ve Çalıştırma

### 1. Kısayol Kurulumu (Önerilen)
Bu eklentinin çalışabilmesi için Antigravity IDE'nin `--remote-debugging-port=9000` parametresi ile başlatılması zorunludur. İşletim sisteminize uygun olan aşağıdaki kurulum betiklerini (script) çalıştırarak masaüstünüze hazır bir kısayol oluşturabilirsiniz:

- **macOS Kullanıcıları:**
  Terminali açın, bu proje dizinine gidin ve şu komutu çalıştırın:
  ```bash
  sh setup-mac.sh
  ```
  Masaüstünüzde oluşan `Antigravity with Auto Accept.app` uygulamasını kullanarak IDE'yi başlatabilirsiniz. İsterseniz bu uygulamayı Dock'a sürükleyebilirsiniz.

- **Windows Kullanıcıları:**
  Bu proje dizinindeki `setup-windows.ps1` dosyasına sağ tıklayıp **"PowerShell ile Çalıştır"** diyerek çalıştırın. Masaüstünüzde gerekli parametreleri içeren `Antigravity with Auto Accept.lnk` kısayolu oluşacaktır.

### 2. Eklentiyi Çalıştırma
1. Proje dizininde `npm install` komutunu çalıştırın.
2. Oluşturduğunuz özel kısayol ile Antigravity IDE'yi açtığınızdan emin olun.
3. Sol taraftaki menüden **Run and Debug** (Çalıştır ve Hata Ayıkla) sekmesine gidin.
4. Üstteki yeşil oynat butonuna basarak ("Run Extension" seçiliyken) Extension Development Host penceresini açın. (Mac'te Touch Bar veya klavye ayarlarına bağlı olarak `fn + F5` de yapabilirsiniz).
5. Komut paletini (`Cmd+Shift+P`) açın.
6. `Auto-Accept: Open Admin Panel` komutunu çalıştırarak yönetim panelini görüntüleyin.
