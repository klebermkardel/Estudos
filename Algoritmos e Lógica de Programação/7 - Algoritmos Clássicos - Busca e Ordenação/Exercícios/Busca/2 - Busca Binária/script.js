// Implementando a Busca Binária: Crie outro script. Defina um array de números já ordenado. Peça ao usuário para digitar um número. Use a função buscaBinaria para encontrar o número e exiba o resultado.

const prompt = require('prompt-sync')();

// --- FUNÇÃO DE BUSCA BINÁRIA ---
// Recebe um array ORDENADO e um alvo, e retorna o índice ou -1.
function buscaBinaria(array, alvo) {
    let inicio = 0;
    let fim = array.length - 1;

    while (inicio <= fim) {
        const meio = Math.floor((inicio + fim) / 2);
        const chute = array[meio];

        if (chute === alvo) {
            return meio;
        } else if (chute < alvo) {
            inicio = meio + 1;
        } else {
            fim = meio - 1;
        }
    }
    return -1;
}

// --- SCRIPT PRINCIPAL ---
console.log("\n--- Busca Binária ---");
// PRÉ-REQUISITO: O array DEVE estar ordenado.
const numerosOrdenados = [2, 5, 7, 11, 19, 25, 33, 42, 55, 67, 88, 91];
console.log(`Procurando na lista ordenada: [${numerosOrdenados.join(', ')}]`);

const alvo = Number(prompt("Qual número você deseja encontrar? "));

if (isNaN(alvo)) {
    console.log("Erro: Por favor, digite um número válido.");
} else {
    const indiceEncontrado = buscaBinaria(numerosOrdenados, alvo);

    if (indiceEncontrado !== -1) {
        console.log(`O número ${alvo} foi encontrado no índice ${indiceEncontrado}.`);
    } else {
        console.log(`O número ${alvo} não foi encontrado na lista.`);
    }
}