const precoEtanol = 4.90;
const precoGasolina = 5.10;
const gastoMedio = 10;
const distancia = 300;
const tipoCombustivel = 'Gasolina';

const litrosConsumidos = distancia / gastoMedio;

if(tipoCombustivel === 'Etanol') {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));
} else {
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));
}

