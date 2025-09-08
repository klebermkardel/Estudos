// É Primo? Transforme o exercício do número primo em uma função. Crie uma função chamada ehPrimo que receba um número como parâmetro e retorne true se ele for primo e false caso contrário.

const prompt = require('prompt-sync')();


const ehPrimo = (numero) => {
    if (numero <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false; 
        }
    }

    return true;
};

console.log("\n--- Verificador de Número Primo ---");
const numeroDigitado = Number(prompt("Digite um número inteiro e positivo: "));

if (isNaN(numeroDigitado) || !Number.isInteger(numeroDigitado)) {
    console.log("Erro: Por favor, informe um número inteiro válido.");
} else {
    if (ehPrimo(numeroDigitado)) {
        console.log(`O número ${numeroDigitado} é PRIMO.`);
    } else {
        console.log(`O número ${numeroDigitado} NÃO é primo.`);
    }
}