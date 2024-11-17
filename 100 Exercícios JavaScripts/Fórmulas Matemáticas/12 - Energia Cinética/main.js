/* Escreva um programa que calcule a energia cinética de um objeto em movimento, utilizando a 
fórmula E = (mv²) / 2, onde E é a energia cinética, m é a massa do objeto e v é a velocidade. */ 

const read = require('readline-sync');

const massa = parseFloat(read.question("Digite a massa do objeto: "));
const velocidade = parseFloat(read.question("Digite a velocidade do objeto: "));

const energiaCinetica = (massa * Math.pow(velocidade, 2)) / 2;

console.log(`A energia cinética deste objeto é de ${energiaCinetica}`);