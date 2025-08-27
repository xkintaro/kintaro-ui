const fs = require('fs');
const path = require('path');

const breakpoints = {
    'xs': 576,
    'sm': 768,
    'md': 992,
    'lg': 1200
};

let css = '';

for (let i = 1; i <= 1000; i++) {
    css += `.z-n${i} { z-index: -${i} !important; }\n`;
}

css += '\n';

for (const [prefix, x] of Object.entries(breakpoints)) {
    css += `@media (max-width: ${x}px) {\n`;
    for (let i = 1; i <= 1000; i++) {
        css += `  .media-${prefix}\\:z-n${i} { z-index: -${i} !important; }\n`;
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