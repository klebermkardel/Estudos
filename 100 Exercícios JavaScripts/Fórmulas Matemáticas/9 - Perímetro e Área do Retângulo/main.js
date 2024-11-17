/* Escreva um programa que calcule o perímetro e a área de um retângulo, utilizando as fórmulas P = 2(l + c) e A = lc, onde l é a largura e c é o comprimento */

const read = require('readline-sync');

const largura = Number(read.question("Digite a largura do retângulo (cm): "));
const comprimento = Number(read.question("Digite o comprimento do retângulo (cm): "));

// Calcula o perímetro
const perimetro = 2 * (largura + comprimento);

// Calcula a área
const area = largura * comprimento;

console.log(`O perímetro do retângulo é: ${perimetro}`);
console.log(`A área do retângulo é: ${area}`);

