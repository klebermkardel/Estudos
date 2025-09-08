// Crie um programa que receba um número e determine se ele é par ou ímpar.

const prompt = require('prompt-sync')();

const numero = Number(prompt("Informe um número: "));

console.log("");

if(isNaN(numero) || !Number.isInteger(numero)) {
    console.log("Erro: Por favor, informe um número inteiro válido.");
} else {
    if (numero % 2 === 0) {
        console.log(`O número ${numero} é par!`)
    } else {
        console.log(`O número ${numero} é ímpar!`);
    }
}