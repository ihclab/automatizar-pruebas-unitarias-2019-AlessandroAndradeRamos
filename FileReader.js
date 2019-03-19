const fs = require ('fs');
class FileReader{    
    leer () {
        fs.readFile('./CasosPrueba.txt', 'utf-8', (err, data) => {
            if(err)
                throw new Error(err);
            
            let barras = data.split('\r\n');
            console.log(barras);
        })   
    }
}

let Lector = new FileReader();
Lector.leer();

