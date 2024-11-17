/* Escreva um programa que calcule a velocidade média de um objeto, utilizando a fórmula v = Δs/Δt, onde v é a velocidade média, 
Δs é a variação de espaço e Δt é a variação de tempo */

const read = require('readline-sync');

const variacaoEspaco = parseFloat(read.question("Digite a variação do espaço: "))
const variacaoTempo = parseFloat(read.question("Digite a variação do tempo: "))

const velocidadeMedia = variacaoEspaco / variacaoTempo

console.log(`A velocidade média deste objeto é de ${velocidadeMedia}`);