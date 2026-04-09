const fs = require('fs');

const html = fs.readFileSync('./public/index.html', 'utf8');
const key = process.env.BREVO_API_KEY || '';
const result = html.replace('%%BREVO_API_KEY%%', key);
fs.writeFileSync('./public/index.html', result);

console.log('Build done. Key injected:', key ? '✓' : '⚠️ missing');
 
