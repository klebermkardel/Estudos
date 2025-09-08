// Peça ao usuário para digitar 10 números. Use um laço for que se repita 10 vezes. Dentro do laço, se o número digitado for ímpar, use continue para pular a soma e ir para a próxima iteração. No final, exiba a soma apenas dos números pares.

const prompt = require('prompt-sync')();

let somaPares = 0;
const totalDeNumeros = 10;

console.log(`Digite um total de ${totalDeNumeros} número inteiro e positivo: `);

for(let i = 1; i <= totalDeNumeros; i++) {
    const numeroDigitado = Number(prompt(`Digite o ${i}º número: `));

    if(isNaN(numeroDigitado) || !Number.isInteger(numeroDigitado) || numeroDigitado <= 0) {
        console.log("Entrada inválida. Tente novamente.");
        i--;
        continue;
    } 

    if(numeroDigitado % 2 !== 0) {
        continue;
    }

    somaPares += numeroDigitado;
}

console.log(`A soma de todos os números pares informados é ${somaPares}`);