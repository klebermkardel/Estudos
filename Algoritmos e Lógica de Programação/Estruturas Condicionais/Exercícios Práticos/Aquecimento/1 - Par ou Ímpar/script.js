// Crie um programa que receba um número e determine se ele é par ou ímpar.

// Importa a biblioteca 'prompt-sync' para permitir a entrada de dados pelo usuário no terminal.
// O '()' no final inicializa a função, deixando-a pronta para uso.
const prompt = require('prompt-sync')();

// Pede ao usuário para informar um número. O valor recebido é sempre um texto (string).
// A função Number() tenta converter esse texto para o tipo numérico.
const numero = Number(prompt("Informe um número: "));

// Imprime uma linha em branco para melhorar a formatação e legibilidade da saída.
console.log("");

// --- BLOCO DE VALIDAÇÃO ---
// Antes de fazer qualquer cálculo, garantimos que a entrada do usuário é válida.
// A condição verifica duas coisas com o operador OU (||):
// 1. isNaN(numero): Retorna 'true' se a conversão para Number() falhou (ex: o usuário digitou "texto").
// 2. !Number.isInteger(numero): Retorna 'true' se o número tiver casas decimais (ex: 5.5),
//    pois o conceito de par/ímpar se aplica apenas a números inteiros.
if (isNaN(numero) || !Number.isInteger(numero)) {
    // Se a entrada for inválida, exibe uma mensagem de erro clara.
    console.log("Erro: Por favor, informe um número inteiro válido.");
} else {
    // --- BLOCO DE LÓGICA PRINCIPAL ---
    // Este código só é executado se a validação passar.
    
    // O operador módulo (%) calcula o RESTO de uma divisão.
    // A regra matemática é: se o resto da divisão de um número por 2 for 0, ele é par.
    if (numero % 2 === 0) {
        // Se a condição for verdadeira, o número é par.
        console.log(`O número ${numero} é par!`);
    } else {
        // Se o resto não for 0 (para inteiros, só pode ser 1 ou -1), o número é ímpar.
        console.log(`O número ${numero} é ímpar!`);
    }
}