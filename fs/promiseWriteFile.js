const {writeFile} = require('fs');

function criaArquivo(file, content) {
    return new Promise((resolve, reject) => {
        writeFile(file, content, (err) => {
            if (err) return reject(err);
            resolve();
        });
    });
}

criaArquivo('promiseArquivo.txt', 'Arquivo criado com promisse')
    .then(() => console.log('Arquivo promiseArquivo.txt criado com sucesso!'))
    .catch((err) => console.log(err));