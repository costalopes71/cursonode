// nessa aula queremos demonstrar o uso do nodemon. O nodemon é uma lib que nos da a habilidade de rodar um arquivo node, fazer alterações nele e não ser necessário rodar novamente pois a lib pega as alterações e roda o arquivo novamente. Isso é bem útil para que não precisemos ficar parando e rodando novamente o código a cada alteração

// rode no terminal: nodemon usandoNodemon

// percebe que o código ira rodar. Se você alterar a constante carro para outra string, automaticamente o nodemon vai entender que houve uma alteração e rodar novamente seu código

const carro = 'FIAT';

console.log(carro);