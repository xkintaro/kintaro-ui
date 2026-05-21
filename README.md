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
    Simple React UI component library.
  </p>

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)

  <p>
    <a href="#requirements">Requirements</a> •
    <a href="#installation">Installation</a> •
    <a href="#integration">Project Integration</a> •
    <a href="#license">License</a>
  </p>

  <br />
  <br />
</div>

## ⚠️ WARNING

I actually shared this project a long time ago, but I'm just writing the README file now. I'm not currently continuing this project, and I don't think it makes much sense to use it. However, at one point, I was using this UI library in almost all of my projects. In fact, I've made around 140 commits. I probably won't continue it, but I wanted to write this as a keepsake.

## 📋 About

It is a simple user interface (UI) component library designed with a focus on dark mode, structured with CSS Variables, and developed for use in React projects. 

## 🛠️ Requirements <a id="requirements"></a>

For the components to work smoothly, the following packages must be installed in your project:
- **React**: v16.8 or higher - for React Hooks support.
- **react-icons**: required for component icons.

## 🚀 Installation <a id="installation"></a>

### Method 1: Directly via Terminal (Recommended)
You can install the library directly to your project using the terminal command:

```bash
npm install git+https://github.com/xkintaro/kintaro-ui.git
```

### Method 2: Manual Installation via package.json
You can manually add the library to the `dependencies` field of your `package.json` file:

```json
"dependencies": {
  "kintaro-ui": "github:xkintaro/kintaro-ui"
}
```

Then install the dependencies:
```bash
npm install
```

## ⚙️ Project Integration <a id="integration"></a>

Components use CSS variables. In order for the components to display correctly and the theme to be active, you need to import the global CSS file at the root entry point of your project (inside `index.js`, `main.jsx`, or `App.jsx`):

```javascript
import 'kintaro-ui/src/root.css';
```

## 📄 License <a id="license"></a>

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

#

<p align="center">
  <sub>❤️ Developed by "Mustafa TAŞAL" (kintaro)</sub>
</p>