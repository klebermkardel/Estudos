// Verificador de Número Primo: Peça um número inteiro e positivo ao usuário. Use um laço for (começando de 2 até a raiz quadrada do número ou até o número-1) para verificar se ele tem algum divisor. Se encontrar qualquer divisor, você já sabe que ele não é primo, então pode usar break para sair do laço e otimizar o programa. No final, informe se o número é primo ou não.

const prompt = require('prompt-sync')();

const numeroDigitado = Number(prompt("Digite um número inteiro e positivo: "));

if(isNaN(numeroDigitado) || !Number.isInteger(numeroDigitado) || numeroDigitado <= 1) {
    console.log("Erro: Por favor, digite um número inteiro e positivo: ");
} else {
    let ehPrimo = true;

    for(let i = 2; i <= Math.sqrt(numeroDigitado); i++) {
        if(numeroDigitado % i === 0) {
            ehPrimo = false;
            break;
        }
    }

    if (ehPrimo) {
        console.log(`O número ${numeroDigitado} é um NÚMERO PRIMO.`);
    } else {
        console.log(`O número ${numeroDigitado} NÃO é um número primo.`);
    }
}