// Peça ao usuário para digitar 10 números. Se o número for ímpar, use 'continue'
// para pular a soma. No final, exiba a soma apenas dos números pares.

// Importa a biblioteca 'prompt-sync' para entrada de dados.
const prompt = require('prompt-sync')();

// --- INICIALIZAÇÃO ---
// 'somaPares' é o nosso acumulador, começando em zero.
let somaPares = 0;
// 'totalDeNumeros' em uma constante torna o código mais legível e fácil de modificar.
const totalDeNumeros = 10;

// Exibe uma instrução clara para o usuário.
console.log(`\n--- Somador de Números Pares ---`);
console.log(`Por favor, digite ${totalDeNumeros} números inteiros e positivos.`);

// --- LAÇO FOR ---
// O laço vai se repetir 10 vezes para pedir 10 números válidos.
for (let i = 1; i <= totalDeNumeros; i++) {
    const numeroDigitado = Number(prompt(`Digite o ${i}º número: `));

    // --- BLOCO DE VALIDAÇÃO ---
    // Garante que a entrada é um número inteiro e positivo.
    if (isNaN(numeroDigitado) || !Number.isInteger(numeroDigitado) || numeroDigitado <= 0) {
        console.log("   -> Entrada inválida. Tente novamente.");
        
        // Esta é uma lógica muito inteligente:
        // Se a entrada for inválida, decrementamos 'i' para "devolver" a tentativa ao usuário.
        i--;
        // 'continue' pula o resto do código desta iteração e força o laço a ir para a próxima,
        // garantindo que o número inválido não seja processado.
        continue;
    }

    // --- LÓGICA DO EXERCÍCIO ---
    // Se o número for ímpar (resto da divisão por 2 diferente de 0)...
    if (numeroDigitado % 2 !== 0) {
        // ... usamos 'continue' para pular diretamente para a próxima iteração do laço,
        // ignorando a linha da soma abaixo.
        continue;
    }

    // --- ACUMULAÇÃO ---
    // Esta linha só é alcançada se o código passar por todas as validações anteriores,
    // ou seja, se o número for um inteiro, positivo e PAR.
    somaPares += numeroDigitado;
}

// --- SAÍDA FINAL ---
// Após o laço terminar, exibe a soma final.
console.log(`\nA soma de todos os números pares informados é: ${somaPares}`);