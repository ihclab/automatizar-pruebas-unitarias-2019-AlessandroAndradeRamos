const fs = require ('fs');
class FileReader{    
    leer () {
        fs.readFile('./CasosPrueba.txt', 'utf-8', (err, data) => {
            if(err)
                throw new Error(err);
            
            let barras = data.split('\r\n');
            let otrasBarras = [];
            for (let i = barras.length - 1; i >= 0; i--){
                barras[i] = barras[i].split(':');
            }
            for (let e = 0; e <= barras.length - 1; e++){
                otrasBarras[e] = barras[e][2].split(' ');
                for(let o = 0; o <= otrasBarras[e].length - 1; o++){
                    otrasBarras[e][o] = Number(otrasBarras[e][o]);
                }
                if(!isNaN(barras[e][3]))
                barras[e][3] = Number(barras[e][3]);
            }
            console.log(barras);
            console.log(otrasBarras);
        })
    }
}

let Lector = new FileReader();
Lector.leer();

