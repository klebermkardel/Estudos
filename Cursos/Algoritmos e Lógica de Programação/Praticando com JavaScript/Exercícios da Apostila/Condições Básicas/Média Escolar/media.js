/* Crie um algoritmo que leia o nome e as duas notas de um aluno, calcule a sua média e mostre na tela. No final, analise a média e mostre se o aluno teve ou não um bom aproveitamento (se ficou acima da média 7.0). */

const n1 = parseFloat(prompt("Digite a primeira nota:"))
const n2 = parseFloat(prompt("Digitea segunda nota:"))
const media = (n1+n2)/2

if(media >= 7) {
    alert(`Média: ${media}\nVocê teve média final acima de 7 e obteve um bom aproveitamento!`)
} else {
    alert(`Média: ${media}\nVocê teve média final abaixo de 7 e não obteve um bom aproveitamento!`)
}