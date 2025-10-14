//Calculo do valor de uma viagem 

let precoEtanol = 5.79;
let precoGasolina = 6.66;
let kmPorLitro = 10; //km/l
let distanciaEmKm = 100; //km
let tipoCombustivel = 'Etanol';

if(combustivelCarro === 'Etanol'){

const valorGasto = litrosConsumidos *precoEtanol;
console.log(valorGasto.toFixed(2));

}else{
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));
}

