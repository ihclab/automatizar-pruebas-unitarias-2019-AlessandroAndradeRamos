const fs = require ('fs');
class FileReader{    
    leer () {
        fs.readFile('./CasosPrueba.txt', 'utf-8', (err, data) => {
            if(err)
                throw new Error(err);
            
            let barras = data.split('\r\n');
            console.log(barras);
            for (let i = barras.length - 1; i >= 0; i--){
                barras[i] = barras[i].split(':');
            }
            console.log(barras);
            for (let e = 0; e <= barras.length - 1; e++){
                barras[e][2] = parseFloat(barras[e][2]);
                barras[e][3] = Number(barras[e][3]);
            }
            console.log(barras);
        })
    }
}

let Lector = new FileReader();
Lector.leer();

