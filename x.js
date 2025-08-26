// Kintaro Sama 🌸 - Width % sınıfları + responsive (xs, sm, md, lg) üretici

const breakpoints = {
    'xs': 576,
    'sm': 768,
    'md': 992,
    'lg': 1200
};

let css = '/********** width percentage special **********/\n\n';

// Default width % sınıfları
for (let i = 1; i <= 100; i++) {
    css += `.w-${i}p { width: ${i}% !important; }\n`;
}

css += '\n';

// Breakpoint responsive sınıfları
for (const [prefix, maxWidth] of Object.entries(breakpoints)) {
    css += `@media (max-width: ${maxWidth}px) {\n`;
    for (let i = 1; i <= 100; i++) {
        css += `  .media-${prefix}\\:w-${i}p { width: ${i}% !important; }\n`;
    }
    css += '}\n\n';
}

css += '/********** width percentage special end **********/';

console.log(css);
