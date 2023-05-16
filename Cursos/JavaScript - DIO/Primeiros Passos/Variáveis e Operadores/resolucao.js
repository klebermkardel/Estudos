const precoCombustivel = 5.25
const kmPorLitro = 18.2
const distancia = 592.3

const litrosConsumidos = distancia / kmPorLitro

const valorGasto = litrosConsumidos * precoCombustivel

console.log("Valor gasto: R$ " + valorGasto.toFixed(2))

