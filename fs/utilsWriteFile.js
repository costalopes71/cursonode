// antes do Node.js 12 podíamos usar o módulo 'util' para converter funções baseadas em callback em funções que retornam Promises.
// Aqui está um exemplo de como usar 'util.promisify' para converter 'fs.writeFile' em uma função que retorna uma Promise.
// Do Node.js 12 em diante, o módulo 'fs' já inclui versões baseadas em Promise de suas funções, então você pode usar 'fs.promises.writeFile' diretamente.
const {promisify} = require('util');
const writeFile = promisify(require('fs').writeFile);

const conteudo = 'Conteúdo do arquivo de utilitário';

writeFile('utilArquivo.txt', conteudo)
    .then(() => console.log('Arquivo utilArquivo.txt salvo com sucesso!'))
    .catch(err => console.error(`Erro ao salvar o arquivo: ${err}`));