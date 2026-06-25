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

1. Proje dizininde `npm install` komutunu çalıştırın.
2. F5 tuşuna basarak (veya Debug panelinden "Run Extension" seçerek) Extension Development Host penceresini açın.
3. Komut paletini (`Ctrl+Shift+P` / `Cmd+Shift+P`) açın.
4. `Auto-Accept: Open Admin Panel` komutunu çalıştırarak yönetim panelini görüntüleyin.
