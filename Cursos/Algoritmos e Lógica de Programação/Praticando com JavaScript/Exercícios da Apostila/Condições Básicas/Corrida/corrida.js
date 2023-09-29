/*  Faça um algoritmo que pergunte a distância que um passageiro deseja
percorrer em Km. Calcule o preço da passagem, cobrando R$0.50 por Km para
viagens até 200Km e R$0.45 para viagens mais longas. */

const distancia = parseFloat(prompt("Qual a distância percorrida?"))

const p200 = 0.50
const pM200 = 0.45

if(distancia <= 200) {
    const vFinal = distancia * p200
    alert(`Distância percorrida: ${distancia.toFixed(2)}Km\n Valor Final: R$ ${vFinal.toFixed(2)}`)
} else {
    const vFinal = distancia * pM200
    alert(`Distância percorrida: ${distancia.toFixed(2)}Km\n Valor Final: R$ ${vFinal.toFixed(2)}`)
}