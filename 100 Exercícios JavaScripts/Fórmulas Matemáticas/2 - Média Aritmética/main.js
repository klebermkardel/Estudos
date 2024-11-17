// Crie um programa que calcule e exiba a média aritmética de três números informadas pelo usuário.

const read = require("readline-sync");

const num1 = Number(read.question("Digite o primeiro numero: "));
const num2 = Number(read.question("Digite o segundo numero: "));
const num3 = Number(read.question("Digite o terceiro numero: "));

const mediaAritmetica = (num1+num2+num3) / 3;

console.log(`A média aritmética dos números informados é ${media}`);
