// function mediaAritmetica() {

//   let arregloNumeros = [19, 18, 13, 11];
//   let suma = 0;
//   for (let i = arregloNumeros.length - 1; i >= 0; i--) {
//     suma += arregloNumeros[i];
//     console.log(arregloNumeros[i]);

//   }
//   suma = suma / arregloNumeros.length;
//   console.log(suma);
// }

// mediaAritmetica();

// function raizEnesima() {

//   let alfa = 12;
//   let enesima = 2;
//   console.log(Math.pow(alfa, 1 / enesima));
// }

// raizEnesima();

// function mediaGeometrica() {
//   let arregloMediaGeo = [19, 18, 13, 11];
//   let total = 0;
//   for (let y = arregloMediaGeo.length - 1; t >= 0; y++) {
//     total *= arregloMediaGeo[y];
//   }

// }

// Otra manera

function Media() {
  this.mediaAritmetica = function (arregloNumeros) {
    let suma = 0;
    for (let i = arregloNumeros.length - 1; i >= 0; i--) {
      suma += arregloNumeros[i];
    }
    suma = suma / arregloNumeros.length;
    return suma;
  }
  this.raizEnesima = function (alfa, omega) {
    let result = Math.pow(alfa, 1 / omega);
    return result;
  }
  this.mediaGeometrica = function (arregloMediaGeo) {
    let total = 1;
    for (let y = arregloMediaGeo.length - 1; y >= 0; y--) {
      total *= arregloMediaGeo[y];
    }
    let result = this.raizEnesima(total, arregloMediaGeo.length)
    return result;
  }
  this.mediaArmonica = function (arregloMediaArmo) {
    let toal = 0;
    for (let i = arregloMediaArmo.length - 1; i >= 0; i--) {
      toal += 1/arregloMediaArmo[i];
    }
    let result = arregloMediaArmo.length/toal;
    return result;
  }
}

module.exports = Media;