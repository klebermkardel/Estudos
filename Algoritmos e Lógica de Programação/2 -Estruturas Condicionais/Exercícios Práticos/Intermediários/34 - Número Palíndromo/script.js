// Peça um número de 3 dígitos e verifique se é um palíndromo (ex: 121).

// Importa a biblioteca 'prompt-sync' para entrada de dados.
const prompt = require('prompt-sync')();

// Exibe um título para o programa.
console.log("\n--- Verificador de Palíndromo (3 dígitos) ---");

// Pede ao usuário o número e o converte para o tipo Number.
const numero = Number(prompt("Digite um número de 3 dígitos: "));

// --- BLOCO DE VALIDAÇÃO ---
// Garante que a entrada seja um número inteiro que esteja entre 100 e 999.
if (isNaN(numero) || !Number.isInteger(numero) || numero < 100 || numero > 999) {
    console.log("Erro: Por favor, digite um número inteiro de 3 dígitos.");
} else {
    // --- BLOCO DE LÓGICA PRINCIPAL ---
    
    // A chave da solução: convertemos o número para uma string (texto).
    // Exemplo: 121 se torna "121".
    const textoNumero = String(numero);
    
    // Agora que é um texto, podemos facilmente comparar o primeiro e o último caractere.
    // Em JavaScript, os caracteres de uma string são acessados por seus índices,
    // que começam a contar do 0.
    // textoNumero[0] é o primeiro caractere.
    // textoNumero[2] é o terceiro (e último) caractere de um número de 3 dígitos.
    if (textoNumero[0] === textoNumero[2]) {
        // Se o primeiro e o último caractere são iguais, é um palíndromo.
        console.log(`O número ${numero} é um palíndromo.`);
    } else {
        // Se não, não é um palíndromo.
        console.log(`O número ${numero} não é um palíndromo.`);
    }
}