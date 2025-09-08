// Verifique se um CPF tem 11 dígitos e exiba o 10º.

// Importa a biblioteca 'prompt-sync' para entrada de dados.
const prompt = require('prompt-sync')();

// Exibe um título para o programa.
console.log("\n--- Verificador de CPF ---");

// Pede ao usuário que digite o CPF. A entrada é mantida como uma string (texto),
// o que é ideal para este problema, pois precisamos checar seu comprimento e caracteres.
const cpf = prompt("Digite os 11 dígitos do seu CPF (somente números): ");

// --- BLOCO DE VALIDAÇÃO E LÓGICA PRINCIPAL ---
// A condição 'if' verifica duas coisas ao mesmo tempo com o operador 'E' (&&).

// 1. cpf.length === 11: Garante que a string digitada tenha exatamente 11 caracteres.
// 2. /^\d+$/.test(cpf): Usa uma Expressão Regular (Regex) para garantir que a string
//    contenha APENAS dígitos numéricos.
//    - '^' significa início da string.
//    - '\d+' significa um ou mais dígitos.
//    - '$' significa fim da string.
if (cpf.length === 11 && /^\d+$/.test(cpf)) {
    // Este bloco só executa se o CPF for um texto de 11 dígitos numéricos.

    // Para acessar um caractere específico em uma string, usamos seu índice (posição).
    // A contagem de índices começa em 0. Portanto, o 10º dígito está no índice 9.
    const decimoDigito = cpf[9];
    
    // Exibe o dígito encontrado.
    console.log(`O 10º dígito (primeiro dígito verificador) é: ${decimoDigito}`);
} else {
    // Se a validação falhar, exibe uma mensagem de erro clara.
    console.log("Erro: Por favor, digite um CPF válido com 11 dígitos numéricos.");
}