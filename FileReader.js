const filesystem = require ('fs');
filesystem.readFile('./CasosPrueba.txt', 'utf-8', (err, data) => {
    if(err)
        throw new Error(err);
    
    let barras = data.split('\r\n');
    console.log(barras);
})