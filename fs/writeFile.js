const {writeFile} = require('fs');

writeFile('arquivo.txt', 'Criando um arquivo de texto com a api de fs do NodeJS', (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});