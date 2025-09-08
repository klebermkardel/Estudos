// Peça um número e verifique se ele é divisível por 5.

// Importa a biblioteca 'prompt-sync' para que o programa possa receber entradas do usuário.
const prompt = require('prompt-sync')();

// Exibe um título para o programa, melhorando a interface para o usuário.
console.log("\n--- Verificador de Divisibilidade por 5 ---");

// Pede ao usuário que digite um número. O valor recebido é sempre um texto (string).
const numeroDigitado = prompt("Digite um número inteiro: ");
// Converte a string digitada para o tipo numérico.
const numero = Number(numeroDigitado);

// --- BLOCO DE VALIDAÇÃO ---
// Antes de qualquer cálculo, garantimos que a entrada é um número inteiro válido.
// A condição || (OU) exibe o erro se:
// 1. isNaN(numero): a entrada não puder ser convertida para um número (ex: "texto").
// 2. !Number.isInteger(numero): o número convertido tiver casas decimais (ex: 10.5).
if (isNaN(numero) || !Number.isInteger(numero)) {
    console.log("Erro: Por favor, informe um número inteiro válido.");
} else {
    // --- BLOCO DE LÓGICA PRINCIPAL ---
    // Este código só é executado se a validação for bem-sucedida.

    // A chave para verificar a divisibilidade é o operador módulo '%'.
    // 'numero % 5' calcula o RESTO da divisão de 'numero' por 5.
    // Se o resto for exatamente 0, significa que a divisão é exata e o número é divisível.
    if (numero % 5 === 0) {
        // Se a condição for verdadeira, exibe a mensagem afirmativa.
        console.log(`O número ${numero} É divisível por 5.`);
    } else {
        // Se o resto for qualquer valor diferente de 0, o número não é divisível.
        console.log(`O número ${numero} NÃO é divisível por 5.`);
    }
}