// Soma: Crie uma função chamada somar que receba dois números como parâmetros e retorne a soma deles. Chame a função, armazene o resultado em uma variável e imprima essa variável.

const prompt = require('prompt-sync')();

const somar = (num1, num2) => num1 + num2;

const numero1 = Number(prompt("Digite o 1º número: "));
const numero2 = Number(prompt("Digite o 2º número: "));

if(isNaN(numero1) || isNaN(numero2)) {
    console.log("Erro: Por favor, digite apenas números inteiros e positivos");
} else {
    console.log(somar(numero1, numero2));
}