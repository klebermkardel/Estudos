// Crie um programa que determine o maior de três números.

const prompt = require('prompt-sync')();

const numero1 = Number(prompt("Informe o primeiro número: "));
const numero2 = Number(prompt("Informe o segundo número: "));
const numero3 = Number(prompt("Informe o terceiro número: "));

console.log("");


if(isNaN(numero1) || isNaN(numero2) || isNaN(numero3) || !Number.isInteger(numero1) || !Number.isInteger(numero2) || !Number.isInteger(numero3)) {
    console.log("Erro: Por favor, informe três números inteiros válidos.");
} else {
    if(numero1 >= numero2 && numero1 >= numero3) {
        console.log("O primeiro número é o maior!");
    } else if (numero2 >= numero1 && numero2 >= numero3) {
        console.log("O segundo número é o maior!");
    } else {
        console.log("O terceiro número é o maior!");
    }
}

