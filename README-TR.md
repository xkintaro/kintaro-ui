<a href="README.md">
  <img src="https://img.shields.io/badge/Language-English-blue?style=flat-square&logo=google-translate&logoColor=white" alt="English">
</a>
<a href="README-TR.md">
  <img src="https://img.shields.io/badge/Language-Türkçe-red?style=flat-square&logo=google-translate&logoColor=white" alt="Türkçe">
</a>

  <br />
  <br />

<div align="center">
  <img src="logo.png" width="120" height="120" />
  <br />
  <br />

  <p>
     React projeleri için koyu temalı, basit bir arayüz bileşen kütüphanesi.
  </p>

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)

  <p>
    <a href="#warning">Uyarı</a> •
    <a href="#demo">Demo</a> •
    <a href="#about">Hakkında</a> •
    <a href="#features">Özellikler</a> •
    <a href="#tech">Teknolojiler</a> •
    <a href="#setup">Kurulum</a> •
    <a href="#license">Lisans</a>
  </p>

  <br />
  <br />
</div>

## <a id="warning"></a> ⚠️ Uyarı

Bu projeyi aslında çok daha önce paylaşmıştım ama README dosyasını ancak şimdi yazıyorum. Şu an projeye devam etmiyorum ve kullanmayı da pek mantıklı bulmuyorum. Ama bir dönem neredeyse tüm projelerimde bu arayüz kütüphanesini kullanıyordum. Hatta 140 civarı commit atmışım. Büyük ihtimalle bir daha devam etmeyeceğim ama bir anı olarak bunu da yazayım istedim.

## <a id="demo"></a> 📷 Demo

- [https://xkintaro.github.io/kintaro-ui-preview/](https://xkintaro.github.io/kintaro-ui-preview/)

## <a id="about"></a> 📋 Hakkında

**Kintaro UI**, React projelerinde kullanılmak üzere geliştirilmiş basit bir bileşen kütüphanesidir. Koyu tema odaklı tasarlanmıştır. Tüm renkler, boşluklar ve boyutlar tek bir dosyadaki CSS değişkenlerinden gelir, böylece tüm bileşenlerin görünümü tek bir yerden değiştirilebilir.

## <a id="features"></a> ✨ Özellikler

- **Metin kutuları**: Biri kayan etiketli ve gösterme butonlu bir şifre alanı olan üç metin kutusu stili.
- **Butonlar**: Devre dışı durumunu destekleyen dört buton stili ve bir kapatma butonu.
- **Başlıklar ve metinler**: Üç başlık stili, bir açıklama metni ve bir ayırıcı.
- **Form öğeleri**: Bir onay kutusu ve seçili öğeyi işaretleyen bir açılır liste.
- **Modal**: Başlığı ve kapatma butonu olan bir modal pencere.
- **Hero ve alt bilgi**: Bir hero bölümü ve sosyal medya bağlantılarını içeren bir alt bilgi.
- **Yükleme animasyonu**: Bir yükleniyor animasyonu.
- **Müzik çalar**: Çalma listesi, karıştırma, tekrar ve ses kontrolü olan bir müzik çalar.
- **Koyu tema**: Renkler, boşluklar ve boyutlar `root.css` dosyasında CSS değişkenleri olarak tanımlanır.

## <a id="tech"></a> 🛠️ Teknolojiler

`React` · `CSS` · `React Icons`

## <a id="setup"></a> 🚀 Kurulum

### Gereksinimler

- **React 16.8 veya üzeri**
- **react-icons**

### Adım Adım Kurulum

1. **Kütüphaneyi yükleyin**

   ```bash
   npm install git+https://github.com/xkintaro/kintaro-ui.git
   ```

   Kütüphaneyi `package.json` dosyanızdaki `dependencies` alanına ekleyip `npm install` komutunu da çalıştırabilirsiniz:

   ```json
   "dependencies": {
     "kintaro-ui": "github:xkintaro/kintaro-ui"
   }
   ```

2. **Genel stilleri içe aktarın**

   Genel CSS dosyasını projenizin giriş noktasında, örneğin `main.jsx` veya `App.jsx` içinde bir kez içe aktarın. Bileşenlerin doğru görünmesi için bu CSS değişkenleri gereklidir.

   ```javascript
   import 'kintaro-ui/src/root.css';
   ```

3. **Bileşenleri kullanın**

   ```jsx
   import { KintaroButton1, KintaroTextBox1 } from 'kintaro-ui';

   function App() {
     return (
       <>
         <KintaroTextBox1 placeholder="Adınız" />
         <KintaroButton1>Gönder</KintaroButton1>
       </>
     );
   }
   ```

## <a id="license"></a> 📄 Lisans

Bu proje MIT Lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakabilirsiniz.

#

<p align="center">
  <sub>❤️ Developed by "Mustafa TAŞAL" (kintaro)</sub>
</p>
