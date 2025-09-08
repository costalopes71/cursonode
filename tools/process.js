require('./subdirectory/sub');

console.log('--------------------------------');
console.log('Nome do arquivo: ', __filename);
console.log('Diretório do arquivo: ', __dirname);
console.log('Argumentos: ', process.argv);
console.log('Ambiente do servidor: ', process.platform);
console.log('Versão do Node.js: ', process.version);

console.log('Variáveis de ambiente:', process.env);
console.log('Sistema operacional: ', process.env.OS);
console.log('Usuário do sistema: ', process.env.USERNAME);
console.log('Linguagem: ', process.env.LANG);
console.log('Server name: ', process.env.COMPUTERNAME);

switch (process.argv[2]) {

    case '-a': 
        console.log('Execute rotina principal');
        break;
    case '-i': 
        console.log('Execute instalação');
        break;
    case '-q': 
        console.log('Encerrando a aplicação');
        process.exit(0);
        break;
    default:
        console.log('Argumento não reconhecido');
        break;
}