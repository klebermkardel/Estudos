// É Primo? Transforme o exercício do número primo em uma função. Crie uma função chamada ehPrimo que receba um número como parâmetro e retorne true se ele for primo e false caso contrário.

const prompt = require('prompt-sync')();

// --- DECLARAÇÃO DA FUNÇÃO ---
// A função recebe um número e sua única tarefa é decidir se ele é primo.
const ehPrimo = (numero) => {
    // 1. Tratamos os casos base. Números menores ou iguais a 1 não são primos.
    if (numero <= 1) {
        return false;
    }

    // 2. Procuramos por divisores.
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        // Se encontrarmos QUALQUER divisor, já sabemos que não é primo.
        if (numero % i === 0) {
            return false; // Retornamos 'false' e a função para aqui.
        }
    }

    // 3. Se o laço terminar sem encontrar nenhum divisor, o número é primo.
    return true;
};

// --- SCRIPT PRINCIPAL ---
console.log("\n--- Verificador de Número Primo ---");
const numeroDigitado = Number(prompt("Digite um número inteiro e positivo: "));

if (isNaN(numeroDigitado) || !Number.isInteger(numeroDigitado)) {
    console.log("Erro: Por favor, informe um número inteiro válido.");
} else {
    // Chamamos a função e usamos o seu retorno (true/false) em uma condição.
    if (ehPrimo(numeroDigitado)) {
        console.log(`O número ${numeroDigitado} é PRIMO.`);
    } else {
        console.log(`O número ${numeroDigitado} NÃO é primo.`);
    }
}