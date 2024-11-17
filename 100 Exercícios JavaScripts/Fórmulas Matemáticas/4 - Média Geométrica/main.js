// Escreva um programa que calcule a média geométrica entre três números informados pelo usuário

const read = require("readline-sync");

const num1 = Number(read.question("Digite o 1º número: "));
const num2 = Number(read.question("Digite o 2º número: "));
const num3 = Number(read.question("Digite o 3º número: "));

const mediaGeometrica = Math.pow(num1*num2*num3, 1/3);

console.log(`A Média Geométrica dos números informados é de ${mediaGeometrica.toFixed(4)}`);