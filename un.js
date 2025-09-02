const fs = require('fs');

fs.readFile('arquivo.txt', (err, data) => {
    
    if(err) throw err;
    
    console.log(data);

    fs.unlink('arquivo.txt', (deleteErr) => {
        
        if (deleteErr) throw deleteErr;
        
        console.log('Arquivo deletado');
    
    });

});

