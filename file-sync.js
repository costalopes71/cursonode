const fs = require('fs');

const startTime = (process.hrtime()[0]/60).toFixed(5);

console.log('Iniciando a leitura do arquivo...');
console.log(startTime);

const file = fs.readFileSync('arquivo.txt');

const endTime = (process.hrtime()[0]/60).toFixed(5);

console.log('Fim da leitura do arquivo...');
console.log(endTime);