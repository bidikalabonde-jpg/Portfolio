const fs = require('fs');
const path = require('path');

const outDir = '/home/user';

// write HTML files (assumes index_html, sobre_html, contato_html are defined)
fs.writeFileSync(path.join(outDir, 'index.html'), index_html, { encoding: 'utf8' });
fs.writeFileSync(path.join(outDir, 'sobre.html'), sobre_html, { encoding: 'utf8' });
fs.writeFileSync(path.join(outDir, 'contato.html'), contato_html, { encoding: 'utf8' });

console.log('✅ Arquivos HTML atualizados com script.js!');

// write CSS file (assumes style_css_atualizado is defined)
fs.writeFileSync(path.join(outDir, 'style.css'), style_css_atualizado, { encoding: 'utf8' });

console.log('✅ Arquivo style.css atualizado com estilos do hambúrguer e mensagem de sucesso!');