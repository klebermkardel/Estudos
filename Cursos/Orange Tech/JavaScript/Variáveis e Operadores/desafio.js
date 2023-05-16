const precoCombustivel = 3.50;
const mediaGasto = 12;
const distancia = 1580;

const litrosConsumidos = distancia / mediaGasto;

console.log(litrosConsumidos.toFixed(2));

const valorGasto = litrosConsumidos * precoCombustivel;

console.log(valorGasto.toFixed(2));