// Peça ao usuário uma palavra. Converta a string em um array de caracteres, inverta a ordem dos elementos no array e, em seguida, junte-os de volta em uma nova string. Imprima a palavra invertida.

// Importa a biblioteca para entrada de dados.
const prompt = require('prompt-sync')();

console.log("\n--- Inversor de Palavras ---");
const palavra = prompt("Digite uma palavra ou frase para inverter: ");

// --- VALIDAÇÃO ---
// Garante que o usuário digitou algo. Usamos .trim() para que espaços
// em branco não contem como uma entrada válida.
if (!palavra || !palavra.trim()) {
    console.log("Erro: Nenhuma palavra foi digitada.");
} else {
    // --- LÓGICA DE INVERSÃO ---
    // A mágica acontece nesta única linha, encadeando os três métodos.
    // 1. palavra.split(''): Quebra a string em um array de caracteres.
    // 2. .reverse(): Inverte a ordem dos elementos nesse array.
    // 3. .join(''): Junta os elementos do array invertido de volta em uma string.
    const palavraInvertida = palavra.split('').reverse().join('');

    // --- SAÍDA FINAL ---
    console.log(`\nPalavra original: ${palavra}`);
    console.log(`Palavra invertida: ${palavraInvertida}`);
}