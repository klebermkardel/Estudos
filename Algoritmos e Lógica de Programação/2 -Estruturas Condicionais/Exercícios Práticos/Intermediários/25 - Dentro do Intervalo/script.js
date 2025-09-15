// Peça um número e verifique se ele está no intervalo entre 20 e 50 (inclusive).

// Importa a biblioteca 'prompt-sync' para permitir a entrada de dados do usuário.
const prompt = require('prompt-sync')();

// Exibe um título para o programa, informando ao usuário qual é o intervalo.
console.log("\n--- Verificador de Intervalo [20, 50] ---");

// Pede ao usuário para digitar um número e o converte para o tipo Number.
// O uso de Number() permite que a entrada seja um número decimal (ex: 35.5).
const numero = Number(prompt("Digite um número: "));

// --- BLOCO DE VALIDAÇÃO ---
// Garante que a entrada do usuário é de fato um número.
if (isNaN(numero)) {
    console.log("Erro: Por favor, digite um número válido.");
} else {
    // --- BLOCO DE LÓGICA PRINCIPAL ---
    // Este bloco só é executado se a entrada for um número válido.

    // Esta é a condição principal. Para estar DENTRO do intervalo,
    // o número precisa satisfazer DUAS condições ao mesmo tempo:
    // 1. Ser maior ou igual a 20 (numero >= 20)
    // E (&&)
    // 2. Ser menor ou igual a 50 (numero <= 50)
    if (numero >= 20 && numero <= 50) {
        // Se ambas as condições forem verdadeiras, o número está no intervalo.
        console.log(`O número ${numero} ESTÁ dentro do intervalo de 20 a 50.`);
    } else {
        // Se pelo menos uma das condições for falsa, o número está fora do intervalo.
        console.log(`O número ${numero} NÃO ESTÁ dentro do intervalo de 20 a 50.`);
    }
}