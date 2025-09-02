const fs = require('fs');

const startTime = (process.hrtime()[0]/60).toFixed(5);

console.log('Iniciando a leitura do arquivo...');
console.log(startTime);

const file = fs.readFile('arquivo.txt', (err, data) => {
    if(err) throw err;
    console.log('Fim da leitura do arquivo...');
});

const endTime = (process.hrtime()[0]/60).toFixed(5);

console.log('Lendo arquivo assincronamente...');
console.log(endTime);