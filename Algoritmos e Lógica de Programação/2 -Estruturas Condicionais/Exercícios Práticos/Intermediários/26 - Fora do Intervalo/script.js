// Peça um número e verifique se ele está fora do intervalo de 10 a 20 (exclusive).

// Importa a biblioteca 'prompt-sync' para a entrada de dados.
const prompt = require('prompt-sync')();

// Exibe um título que informa ao usuário sobre o intervalo a ser verificado.
// O uso de parênteses (10, 20) em matemática geralmente denota um intervalo exclusivo.
console.log("\n--- Verificador de Fora do Intervalo (10, 20) ---");

// Pede ao usuário que digite um número e o converte para o tipo Number.
const numero = Number(prompt("Digite um número: "));

// --- BLOCO DE VALIDAÇÃO ---
// Garante que a entrada seja um número antes de prosseguir com a lógica.
if (isNaN(numero)) {
    console.log("Erro: Por favor, digite um número válido.");
} else {
    // --- BLOCO DE LÓGICA PRINCIPAL ---
    // Este bloco só é executado se a entrada for um número válido.

    // Esta é a condição principal. Para estar FORA do intervalo,
    // o número precisa satisfazer APENAS UMA das duas condições:
    // 1. Ser menor ou igual a 10 (numero <= 10)
    // OU (||)
    // 2. Ser maior ou igual a 20 (numero >= 20)
    // A palavra "exclusive" no enunciado significa que os próprios 10 e 20 não estão
    // dentro do intervalo, portanto, estão "fora".
    if (numero <= 10 || numero >= 20) {
        // Se uma das condições for verdadeira, o número está fora do intervalo.
        console.log(`O número ${numero} ESTÁ fora do intervalo de 10 a 20.`);
    } else {
        // Se ambas as condições forem falsas, o número só pode estar entre 10 e 20.
        console.log(`O número ${numero} NÃO ESTÁ fora do intervalo de 10 a 20.`);
    }
}