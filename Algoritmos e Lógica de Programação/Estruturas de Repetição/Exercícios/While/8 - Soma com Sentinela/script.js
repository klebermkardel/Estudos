// Peça ao usuário para digitar números um após o outro. Some todos os números digitados. O laço while deve parar quando o usuário digitar o número 0. No final, exiba a soma total.

const prompt = require('prompt-sync')();

let soma = 0;
let numeroDigitado = Number(prompt("Digite um número para somar (ou 0 para sair): "));

if (isNaN(numeroDigitado) || !Number.isInteger(numeroDigitado)){
        console.log("Erro: A primeira entrada foi inválida.");
} else {
    while (numeroDigitado !== 0) {
        soma += numeroDigitado;
        numeroDigitado = Number(prompt("Digite o próximo número (ou 0 para sair): "));

        if(isNaN(numeroDigitado) || !Number.isInteger(numeroDigitado)) {
            console.log("Erro: Entrada inválida ignorada. Digite um número inteiro.");
            numeroDigitado = -1;
        }
    }
}


console.log(`A soma de todos os números digitados é ${soma}`);