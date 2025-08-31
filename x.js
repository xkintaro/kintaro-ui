const fs = require('fs');
const path = require('path');

const breakpoints = {
    'xs': 576,
    'sm': 768,
    'md': 992,
    'lg': 1200
};

let css = '';
let customClassVarible = 'translate';
let classVarible = 'transform';

for (let i = 1; i <= 1024; i++) {
    css += `.${customClassVarible}-${i}px { ${classVarible}: translate(${i}px, ${i}px) !important; }\n`;
    css += `.hover\\:${customClassVarible}-${i}px:hover { ${classVarible}: translate(${i}px, ${i}px) !important; }\n`;
}

css += '\n';

for (const [prefix, x] of Object.entries(breakpoints)) {
    css += `@media (max-width: ${x}px) {\n`;
    for (let i = 1; i <= 1024; i++) {
        css += `  .media-${prefix}\\:${customClassVarible}-${i}px { ${classVarible}: translate(${i}px, ${i}px) !important; }\n`;
        css += `  .media-${prefix}\\:hover\\:${customClassVarible}-${i}px:hover { ${classVarible}: translate(${i}px, ${i}px) !important; }\n`;
    }
    css += '}\n\n';
}

const fileName = 'x.css';
const filePath = path.join(__dirname, fileName);

fs.writeFile(filePath, css, (err) => {
    if (err) {
        console.error('error:', err);
        return;
    }
    console.log(`success ${filePath}`);
});
