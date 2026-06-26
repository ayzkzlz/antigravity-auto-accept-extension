# Contributing to Antigravity Auto-Accept

[English](#english) | [Türkçe](#türkçe)

---

## English

Thank you for your interest in contributing to the **Antigravity Auto-Accept** extension! This document outlines how to set up your local development environment, compile the source code, and understand the core architecture of the project.

### Prerequisites
Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16.x or newer)
- npm (Node Package Manager)
- Antigravity IDE (VS Code)

### Local Development Setup

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/ayzkzlz/antigravity-auto-accept-extension.git
   cd antigravity-auto-accept-extension
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Compile TypeScript Code:**
   We use TypeScript for robust and type-safe code. You can compile the project using:
   ```bash
   npm run compile
   ```
   *Alternatively, run `npm run watch` to automatically recompile your code upon saving.*

4. **Package a Release:**
   To build a production-ready Standalone Installer `.zip` package, simply run the build script:
   ```bash
   ./build-release.sh
   ```
   This automates the compilation, `.vsix` generation, and packaging of the setup scripts into `antigravity-auto-accept-installer.zip`.

### Testing the Extension

To test the extension locally without building a `.zip` or `.vsix` package:
1. Open the project folder in Antigravity IDE.
2. Go to the **Run and Debug** view (`Cmd+Shift+D` or `Ctrl+Shift+D`).
3. Click the green **Run Extension** button (or press `F5`).
4. A new "Extension Development Host" window will open with the extension loaded.
5. *Note:* Make sure your main IDE instance is launched with `--remote-debugging-port=9000` so the CDP client can attach properly.

### Architecture Overview

- **`src/extension.ts`**: The main entry point. Handles the status bar item, registers VS Code commands, and initializes background services.
- **`src/cdpClient.ts`**: The core logic that connects to the Chrome DevTools Protocol (`localhost:9000`). It listens for DOM changes and automatically clicks "Accept" buttons while filtering out dangerous commands via Regex.
- **`src/panels/AdminPanel.ts`**: Manages the Webview UI. It uses secure CSP headers and handles bi-directional messaging between the UI and the extension core.
- **`src/autoUpdater.ts`**: A background service that polls GitHub Releases every 4 hours. If a new version is found, it downloads and triggers an install prompt using pure Node.js `https` (no external dependencies).

---

## Türkçe

**Antigravity Auto-Accept** eklentisine katkıda bulunmak istediğiniz için teşekkür ederiz! Bu dokümanda, yerel geliştirme ortamınızı nasıl kuracağınız, kaynak kodunu nasıl derleyeceğiniz ve projenin temel mimarisi açıklanmaktadır.

### Önkoşullar
Başlamadan önce sisteminizde şunların yüklü olduğundan emin olun:
- [Node.js](https://nodejs.org/) (v16.x veya daha yeni)
- npm (Node Package Manager)
- Antigravity IDE (VS Code)

### Yerel Geliştirme Ortamı Kurulumu

1. **Repoyu Klonlayın:**
   ```bash
   git clone https://github.com/ayzkzlz/antigravity-auto-accept-extension.git
   cd antigravity-auto-accept-extension
   ```

2. **Bağımlılıkları Yükleyin:**
   ```bash
   npm install
   ```

3. **TypeScript Kodunu Derleyin:**
   Sağlam ve tip güvenli (type-safe) kod yazmak için TypeScript kullanıyoruz. Projeyi şu komutla derleyebilirsiniz:
   ```bash
   npm run compile
   ```
   *Alternatif olarak, kodunuzu kaydettiğinizde otomatik derlenmesi için `npm run watch` komutunu kullanabilirsiniz.*

4. **Nihai Paketi (Release) Oluşturun:**
   Kullanıcılara dağıtılacak `antigravity-auto-accept-installer.zip` paketini oluşturmak için derleme betiğini çalıştırmanız yeterlidir:
   ```bash
   ./build-release.sh
   ```
   Bu betik, kodu derler, `.vsix` dosyasını oluşturur ve kurulum scriptleriyle birleştirip otomatik bir zip arşivi hazırlar.

### Eklentiyi Test Etme

Eklentiyi `.zip` veya `.vsix` paketi oluşturmadan yerel olarak test etmek için:
1. Proje klasörünü Antigravity IDE'de açın.
2. **Çalıştır ve Hata Ayıkla (Run and Debug)** sekmesine gidin (`Cmd+Shift+D` veya `Ctrl+Shift+D`).
3. Yeşil **Run Extension** butonuna tıklayın (veya `F5`'e basın).
4. Eklentinin yüklendiği yeni bir "Extension Development Host" penceresi açılacaktır.
5. *Not:* CDP istemcisinin doğru bağlanabilmesi için ana IDE pencerenizin `--remote-debugging-port=9000` ile başlatıldığından emin olun.

### Mimari Özeti

- **`src/extension.ts`**: Ana başlangıç noktasıdır. Durum çubuğu (Status Bar) butonunu yönetir, komutları kaydeder ve arka plan servislerini başlatır.
- **`src/cdpClient.ts`**: Chrome DevTools Protocol'üne (`localhost:9000`) bağlanan çekirdek mantıktır. DOM değişikliklerini dinler ve tehlikeli komutları Regex ile filtreleyerek güvenli "Kabul Et" butonlarına otomatik tıklar.
- **`src/panels/AdminPanel.ts`**: Webview kullanıcı arayüzünü (UI) yönetir. Güvenli CSP başlıkları kullanır ve arayüz ile eklenti çekirdeği arasındaki çift yönlü mesajlaşmayı sağlar.
- **`src/autoUpdater.ts`**: Her 4 saatte bir GitHub Releases üzerinden güncellemeleri kontrol eden arka plan servisidir. Dış bağımlılık kullanmadan (saf Node.js `https` ile) yeni sürümleri indirir ve kurulum uyarısı çıkarır.
