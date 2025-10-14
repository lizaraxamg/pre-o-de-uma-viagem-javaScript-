//Calculo do valor de uma viagem 

let precoEtanol = 5.79;
let precoGasolina = 6.66;
let combustivelCarro = 'Gasolina';
let gastoMedio = 10; //km/l
let distancia = 100; //km

let valorGasto = gastoMedio * distancia /(combustivelCarro === 'Gasolina' ? precoGasolina :  precoEtanol);
console.log(valorGasto.toFixed(2));