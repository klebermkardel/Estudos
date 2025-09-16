// Implementando a Busca Linear: Crie um script. Defina um array de números desordenado. Peça ao usuário para digitar um número. Use a função buscaLinear para encontrar o número e exiba o resultado.

const prompt = require('prompt-sync')();

// --- Função de Busca Linear ---
// Recebe um array e um alvo, e retorna o índice ou -1
function buscaLinear(array, alvo) {
    // Percorre o arrar do início ao fim.
    for (let i = 0; i < array.length; i++) {
        // Se o elemento atual for igual ao alvo...
        if (array[i] === alvo) {
            // ... retorna o índice e para a busca
            return i;
        }
    }
    // Se o laço terminar, o alvo não foi encontrado.
    return -1;
}

// --- SCRIPT PRINCIPAL ---
console.log("\n--- Busca Linear ---");
// Um array desordenado, como em um cenário real.
const numeros = [15, 8, 10, 25, 12, 19, 5, 22];
console.log(`Procurando na lista: [${numeros.join(', ')}]`);

const alvo = Number(prompt("Qual número você deseja encontrar? "));

if(isNaN(alvo)) {
    console.log("Erro: Por favor, digite um número válido.");
} else {
    // Chama a função de busca e armazena o resultado.
    const indiceEncontrado = buscaLinear(numeros, alvo);

    // Verifica o resultado retornado pela função.
    if (indiceEncontrado !== -1) {
        console.log(`O número ${alvo} foi encontrado no índice ${indiceEncontrado}.`);
    } else {
        console.log(`O número ${alvo} não foi encontrado na lista.`);
    }
}