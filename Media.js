class Media {
  mediaAritmetica (arregloNumeros) {
    if(arregloNumeros === null)
    return 0.0000;
    let suma = 0;
    for (let i = arregloNumeros.length - 1; i >= 0; i--) {
      suma += arregloNumeros[i];
    }
    suma = suma / arregloNumeros.length;
    return suma.toFixed(4);
  }
  raizEnesima (alfa, omega) {
    let result = Math.pow(alfa, 1 / omega);
    return result;
  }
  mediaGeometrica (arregloMediaGeo) {
    if(arregloMediaGeo === null)
    return 0.0000;
    let total = 1;
    for (let y = arregloMediaGeo.length - 1; y >= 0; y--) {
      total *= arregloMediaGeo[y];
    }
    let result = this.raizEnesima(total, arregloMediaGeo.length)
    return result.toFixed(4);
  }
  mediaArmonica (arregloMediaArmo) {
    // let toal = 0;
    // for (let i = arregloMediaArmo.length - 1; i >= 0; i--) {
    //   toal += 1/arregloMediaArmo[i];
    // }
    // let result = arregloMediaArmo.length/toal;
    return 'ejele método no implementado';
  }
}

module.exports = Media;
