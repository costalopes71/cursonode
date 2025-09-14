const {readFile} = require('fs').promises;

async function read() {
    const data = await readFile('texto.txt', 'binary');
    return new Buffer.from(data, 'binary');
}

try {
    read().then(data => console.log(data.toString()));
} catch (error) {
    console.log(`Ocorreu um erro: ${error}`);
}