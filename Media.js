function mediaAritmetica () {

  let arregloNumeros = [19, 18, 13, 11];
  let suma = 0;
  for(let i = arregloNumeros.length -1 ; i >= 0; i--) {
    suma += arregloNumeros[i];
    console.log(arregloNumeros[i]);
      
  }
  suma = suma/arregloNumeros.length;
  console.log(suma);
}

mediaAritmetica();

function raizEnesima (){

  let alfa = 12;
  let enesima = 2;
  console.log(Math.pow(alfa, 1/enesima));
}

raizEnesima();

function mediaGeometrica(){
  let arregloMediaGeo = [19, 18, 13, 11];
  let total = 0;
  for (let y = arregloMediaGeo.length -1; t >= 0; y++){
    total *= arregloMediaGeo[y]; 
  }

}