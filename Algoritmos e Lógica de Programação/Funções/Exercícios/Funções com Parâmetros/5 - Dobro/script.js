// Dobro do Número: Crie uma função chamada calcularDobro que receba um número como parâmetro e imprima o dobro desse número.

const prompt = require('prompt-sync')();

const calcularDobro = (num) => {
    const resultado = num * 2;
    console.log(`O dobro de ${num} é ${resultado}`);
}

const numeroDigitado = Number(prompt("Digite um número inteiro:"));

if (isNaN(numeroDigitado) || !Number.isInteger(numeroDigitado)) {
    console.log("Erro: Por favor, digite um número inteiro válido");
} else {
    calcularDobro(numeroDigitado);
}