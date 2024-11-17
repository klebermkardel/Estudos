/* Escreva um programa que calcule a área de um círculo a partir do raio, utilizando a fórmula A = πr² */

const read = require("readline-sync");

const raio = Number(read.question("Digite o raio do círculo: "));

const area = Math.PI * Math.pow(raio, 2);

console.log(`A área do círculo é: ${area.toFixed(2)}`);