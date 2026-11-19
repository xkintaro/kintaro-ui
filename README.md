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
     A simple dark themed UI component library for React projects.
  </p>

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)

  <p>
    <a href="#warning">Warning</a> •
    <a href="#demo">Demo</a> •
    <a href="#about">About</a> •
    <a href="#features">Features</a> •
    <a href="#tech">Tech</a> •
    <a href="#setup">Setup</a> •
    <a href="#license">License</a>
  </p>

  <br />
  <br />
</div>

## <a id="warning"></a> ⚠️ Warning

I actually shared this project a long time ago, but I am only writing the README file now. I am not continuing this project at the moment, and I do not think it makes much sense to use it. However, at one point I was using this UI library in almost all of my projects. In fact, I made around 140 commits. I probably will not continue it, but I wanted to write this as a keepsake.

## <a id="demo"></a> 📷 Demo

- [https://xkintaro.github.io/kintaro-ui-preview/](https://xkintaro.github.io/kintaro-ui-preview/)

## <a id="about"></a> 📋 About

**Kintaro UI** is a simple component library developed for use in React projects. It is designed with a focus on dark mode, and all colors, spacing and sizes come from CSS variables in a single file, so the look of every component can be changed from one place.

## <a id="features"></a> ✨ Features

- **Text boxes**: Three text box styles, one of them a password field with a floating label and a show button.
- **Buttons**: Four button styles and a close button with disabled state support.
- **Titles and text**: Three title styles, a description text and a divider.
- **Form elements**: A checkbox and a dropdown with a selected item mark.
- **Modal**: A modal window with a title and a close button.
- **Hero and footer**: A hero section and a footer with social media links.
- **Loader**: A loading animation.
- **Audio player**: A music player with a playlist, shuffle, repeat and volume control.
- **Dark theme**: Colors, spacing and sizes are defined as CSS variables in `root.css`.

## <a id="tech"></a> 🛠️ Tech

`React` · `CSS` · `React Icons`

## <a id="setup"></a> 🚀 Setup

### Requirements

- **React 16.8 or newer**
- **react-icons**

### Step-by-Step Installation

1. **Install the library**

   ```bash
   npm install git+https://github.com/xkintaro/kintaro-ui.git
   ```

   You can also add it to the `dependencies` field of your `package.json` file and run `npm install`:

   ```json
   "dependencies": {
     "kintaro-ui": "github:xkintaro/kintaro-ui"
   }
   ```

2. **Import the global styles**

   Import the global CSS file once at the entry point of your project, such as `main.jsx` or `App.jsx`. The components need these CSS variables to display correctly.

   ```javascript
   import 'kintaro-ui/src/root.css';
   ```

3. **Use the components**

   ```jsx
   import { KintaroButton1, KintaroTextBox1 } from 'kintaro-ui';

   function App() {
     return (
       <>
         <KintaroTextBox1 placeholder="Your name" />
         <KintaroButton1>Send</KintaroButton1>
       </>
     );
   }
   ```

## <a id="license"></a> 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

#

<p align="center">
  <sub>❤️ Developed by "Mustafa TAŞAL" (kintaro)</sub>
</p>
