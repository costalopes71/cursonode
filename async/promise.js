function sum(x) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(x + 5000);
        }, 3000);
        
    });
}

sum(390).then(resultado => {
    console.log(`Resultado: ${resultado}`);
});