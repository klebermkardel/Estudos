/* Crie um programa que calcule e exiba o perímetro de um círculo, solicitando o raio ao usuário. */

const read = require("readline-sync");

const raio = Number(read.question("Digite o raio do círculo: "));

const perimetro = 2 * Math.PI * raio;

console.log(`O perímetro do círculo é: ${perimetro.toFixed(2)}`);

