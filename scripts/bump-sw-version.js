const fs = require('fs');
const sw = fs.readFileSync('sw.js', 'utf8');
const tag = Date.now().toString(36);
const updated = sw.replace(/brujula-emocional-v[\w-]+/, `brujula-emocional-${tag}`);
fs.writeFileSync('sw.js', updated);
console.log(`SW → brujula-emocional-${tag}`);
