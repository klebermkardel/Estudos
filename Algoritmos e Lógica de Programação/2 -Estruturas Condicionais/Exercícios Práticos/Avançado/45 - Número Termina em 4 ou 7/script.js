// Verifique se o último dígito de um número inteiro é 4 ou 7.

// Importa a biblioteca 'prompt-sync' para entrada de dados.
const prompt = require('prompt-sync')();

// Exibe um título para o programa.
console.log("\n--- Verificador de Último Dígito ---");

// Pede ao usuário que digite um número inteiro e o converte para o tipo Number.
const numero = Number(prompt("Digite um número inteiro: "));

// --- BLOCO DE VALIDAÇÃO ---
// Garante que a entrada seja um número inteiro válido.
if (isNaN(numero) || !Number.isInteger(numero)) {
    console.log("Erro: Por favor, digite um número inteiro válido.");
} else {
    // --- BLOCO DE LÓGICA PRINCIPAL ---

    // A chave da solução é o operador módulo (%). 'numero % 10' retorna o último dígito.
    // Ex: 124 % 10 resulta em 4.
    // 'Math.abs()' garante que, se o número for negativo (ex: -124), o resultado
    // seja sempre positivo. Isso é um toque de robustez excelente.
    const ultimoDigito = Math.abs(numero % 10);
    
    // A condição 'if' usa o operador 'OU' (||) para verificar se o 'ultimoDigito'
    // é igual a 4 OU é igual a 7.
    if (ultimoDigito === 4 || ultimoDigito === 7) {
        // Se uma das condições for verdadeira, a mensagem é impressa.
        console.log(`O número ${numero} TERMINA com 4 ou 7.`);
    } else {
        // Se nenhuma das condições for verdadeira, a mensagem de negação é impressa.
        console.log(`O número ${numero} NÃO termina com 4 ou 7.`);
    }
}