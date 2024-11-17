// Escreva um programa que solicite ao usuário dois números e exiba a soma, subtração, multiplicação e divisão entre eles

const read = require('readline-sync');

const num1 = Number(read.question("Digite o primeiro numero: "));
const num2 = Number(read.question("Digite o segundo numero: "));

const soma = num1 + num2;
const subtracao = num1 - num2;
const multiplicacao = num1 * num2;
const divisao = num1 / num2;

console.log(soma);
console.log(subtracao);
console.log(multiplicacao);
console.log(divisao);