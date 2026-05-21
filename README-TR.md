<a href="README.md">
  <img src="https://img.shields.io/badge/Language-English-blue?style=flat-square&logo=google-translate&logoColor=white" alt="English">
</a>
<a href="README-TR.md">
  <img src="https://img.shields.io/badge/Dil-Türkçe-red?style=flat-square&logo=google-translate&logoColor=white" alt="Türkçe">
</a>

  <br />
  <br />

<div align="center">
  <img src="logo.png" width="120" height="120" />
  <br />
  <br />

  <p>
    Basit Bir React UI Bileşen Kütüphanesi
  </p>

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)

  <p>
    <a href="#requirements">Gereksinimler</a> •
    <a href="#installation">Kurulum</a> •
    <a href="#integration">Proje Entegrasyonu</a> •
    <a href="#license">Lisans</a>
  </p>

  <br />
  <br />
</div>

## ⚠️ UYARI

Bu projeyi aslında çok daha önce paylaşmıştım ama README dosyasını ancak şimdi yazıyorum. Şu an projeye devam etmiyorum ve kullanmayı da pek mantıklı bulmuyorum. Ama bir dönem neredeyse tüm projelerimde bu UI kütüphanesini kullanıyordum. Hatta 140 civarı commit atmışım. Büyük ihtimalle bir daha devam etmeyeceğim ama bir anı olarak bunu da yazayım istedim.

## 📋 Hakkında

Koyu tema odaklı tasarlanmış, CSS Değişkenleri ile yapılandırılmış ve React projelerinde kullanılmak üzere geliştirilmiş basit bir kullanıcı arayüzü (UI) bileşen kütüphanesidir. 

## 🛠️ Gereksinimler <a id="requirements"></a>

Bileşenlerin sorunsuz çalışabilmesi için projenizde aşağıdaki paketlerin kurulu olması gerekmektedir:
- **React**: v16.8 veya üzeri - React Hooks desteği için.
- **react-icons**: bileşenlerin ikonları için gereklidir.

## 🚀 Kurulum <a id="installation"></a>

### Yöntem 1: Doğrudan Terminal Üzerinden (Önerilen)
Kütüphaneyi doğrudan terminal komutu ile projenize yükleyebilirsiniz:

```bash
npm install git+https://github.com/xkintaro/kintaro-ui.git
```

### Yöntem 2: package.json ile Manuel Kurulum
`package.json` dosyanızın `dependencies` alanına kütüphaneyi manuel olarak ekleyebilirsiniz:

```json
"dependencies": {
  "kintaro-ui": "github:xkintaro/kintaro-ui"
}
```

Ardından bağımlılıkları yükleyin:
```bash
npm install
```

## ⚙️ Proje Entegrasyonu <a id="integration"></a>

Bileşenler, CSS değişkenlerini kullanmaktadır. Bileşenlerin doğru şekilde görüntülenmesi ve temanın aktif olması için projenizin en üst dizininde (`index.js`, `main.jsx` veya `App.jsx` içinde) global CSS dosyasını içe aktarmanız gerekir:

```javascript
import 'kintaro-ui/src/root.css';
```

## 📄 Lisans <a id="license"></a>

Bu proje MIT Lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

#

<p align="center">
  <sub>❤️ Developed by "Mustafa TAŞAL" (kintaro)</sub>
</p>