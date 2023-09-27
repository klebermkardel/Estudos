const qtdKm = parseFloat(prompt("Informe a quilômetragem: "))
const qtdDias = parseInt(prompt("Informe a quantidades de dias do aluguel:"))

const valorDia = 90 * qtdDias
const valorKm = 0.20 * qtdKm

const totalAPagar = valorDia + valorKm

alert(`Dias alugados (R$ 90,00/dia): ${qtdDias}
Quilômetros rodados (R$ 0,20/km): ${qtdKm.toFixed(2)}

Total a pagar: R$ ${totalAPagar.toFixed(2)}`)