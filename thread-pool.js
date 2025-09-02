// nesse exemplo mostramos como o NodeJS envia os processamentos pesados para um thread pool com 4 threads para executar o processamento e manter a sua thread liberada de processamentos pesados. Perceba como a quinta chamada da função demora mais, pois existem apenas 4 threads

const crypo = require('crypto');
const startTime = Date.now();

function logHashTime() {

    crypo.pbkdf2("a", "b", 100000, 512, "sha512", () => {
        console.log(`Hash: ${Date.now() - startTime}ms`);
    });

}

logHashTime();
logHashTime();
logHashTime();
logHashTime();
logHashTime();