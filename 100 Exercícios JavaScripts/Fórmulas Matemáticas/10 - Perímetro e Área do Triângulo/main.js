/* Escreva um programa que calcule o perímetro e a área de um triângulo, utilizando as fórmulas P = a + b + c e A = (b * h) / 2, onde a, b e c são os lados do triângulo e h é a altura relativa ao lado b. */

const read = require('readline-sync');

const a = Number(read.question("Digite o 1º lado: "));
const b = Number(read.question("Digite o 2º lado: "));
const c = Number(read.question("Digite o 3º lado: "));
const h = Number(read.question("Digite a altura: "));

const perimetro = a + b + c;

const area = (b * h) / 2;

console.log(`Perímetro do triângulo: ${perimetro}`);
console.log(`Área do triângulo: ${area}`);
