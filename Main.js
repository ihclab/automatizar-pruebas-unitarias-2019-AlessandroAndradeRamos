let Media = require('./Media');

let media = new Media();

const fs = require ('fs');
class Main{    
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
                    if(otrasBarras[e][o] == 'null'|| otrasBarras[e][o] == 'Null' || otrasBarras[e][o] == 'NULL')
                    otrasBarras[e][o] = null;
                    else
                    otrasBarras[e][o] = Number(otrasBarras[e][o]);
                }
                if(!isNaN(barras[e][3]))
                barras[e][3] = Number(barras[e][3]);
            }
            for(let u = 0; u <= barras.length - 1; u++){
                if(this.ejecutarMetodoPrueba(barras[u][1], otrasBarras[u], barras[u][3]) == true)
                console.log('Caso de prueba super exitoso');
                // console.log(barras[u][0] + ' Éxito' + barras[u][1] + ' Calculado' + ' = ');
                //ETABAMOS A PUNTO DE CAMBIAR LOS METODOS DE EJECUCION DE PRUEBA PARA QUE SOLO PROCESARAN Y DEVOLVIERAN RESULTADO, EN LUGAR DE DECIDIR CIERTO O FALSO
                else if(this.ejecutarMetodoPrueba(barras[u][1], otrasBarras[u], barras[u][3]) == 'oof')
                console.log('Caso de prueba super fallido, el caso de prueba no existe');
                else if(this.ejecutarMetodoPrueba(barras[u][1], otrasBarras[u], barras[u][3]) == 'ooof')
                console.log('Metodo de prueba no implementado');
                else
                console.log('Caso de prueba fallido');
            }
        })
    }
    ejecutarMetodoPrueba (nombreIdentificador, valores, valorEsperado){
        if(nombreIdentificador == 'mediaAritmetica'){
            if(media.mediaAritmetica(valores) == valorEsperado)
            return true;
            else if(media.mediaAritmetica(valores) == 'ejele metodo no implementado')
            return 'ooof';
            else
            return false;
        }
        else if(nombreIdentificador == 'mediaGeometrica'){
            if(media.mediaGeometrica(valores) == valorEsperado)
            return true;
            else if(media.mediaGeometrica(valores) == 'ejele metodo no implementado')
            return 'ooof';
            else
            return false;
        }
        else if(nombreIdentificador == 'raizEnesima'){
            if(media.raizEnesima(valores) == valorEsperado)
            return true;
            else if(media.raizEnesima(valores) == 'ejele metodo no implementado')
            return 'ooof';
            else
            return false;
        }
        else if(nombreIdentificador == 'mediaArmonica'){
            if(media.mediaArmonica(valores) == valorEsperado)
            return true;
            else if(media.mediaArmonica(valores) == 'ejele metodo no implementado')
            return 'ooof';
            else
            return false;
        }
        return 'oof';
    }
}


let Lector = new Main();
Lector.leer();