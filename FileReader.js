let Media = require('./Media');

let media = new Media();

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
            for(let u = 0; u <= barras.length - 1; u++){
                if(this.ejecutarMetodoPrueba(barras[u][1], otrasBarras[u], barras[u][3]) == true)
                console.log('Caso de prueba bien exitoso');
                else if(this.ejecutarMetodoPrueba(barras[u][1], otrasBarras[u], barras[u][3]) == 'oof')
                console.log('Caso de prueba super fallido, el caso de prueba no existe');
                else
                console.log('Caso de prueba fallido');
            }
        })
    }
    ejecutarMetodoPrueba (nombreIdentificador, valores, valorEsperado){
        if(nombreIdentificador == 'mediaAritmetica'){
            if(media.mediaAritmetica(valores) == valorEsperado)
            return true;
            else
            return false;
        }
        else if(nombreIdentificador == 'mediaGeometrica'){
            if(media.mediaGeometrica(valores) == valorEsperado)
            return true;
            else
            return false;
        }
        else if(nombreIdentificador == 'raizEnesima'){
            if(media.mediaArmonica(valores) == valorEsperado)
            return true;
            else
            return false;
        }
        else if(nombreIdentificador == 'mediaArmonica'){
            if(media.mediaArmonica(valores) == valorEsperado)
            return true;
            else
            return false;
        }
        return 'oof';
    }
}


let Lector = new FileReader();
Lector.leer();