// Tabuada: Peça ao usuário um número e, em seguida, use um laço for para imprimir a tabuada desse número, de 1 a 10 (ex: 5 x 1 = 5, 5 x 2 = 10, ...).

const prompt = require('prompt-sync')();

const numero = Number(prompt("Informe o número no qual deseja calcular a tabuada: "));

if(isNaN(numero) || !Number.isInteger(numero)) {
    console.log("Erro: Por favor, informe um número inteiro.");
} else {

    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;

        console.log(`${numero} x ${i} = ${resultado}`)
    }
}