// Verifique se um caractere é número, letra maiúscula, minúscula ou símbolo.

// Importa a biblioteca 'prompt-sync' para a entrada de dados.
const prompt = require('prompt-sync')();

// Exibe um título para o programa.
console.log("\n--- Verificador de Tipo de Caractere ---");

// Pede ao usuário que digite um único caractere.
const char = prompt("Digite um único caractere: ");

// --- BLOCO DE VALIDAÇÃO ---
// Garante que a entrada não esteja vazia e que tenha exatamente um caractere de comprimento.
if (!char || char.length !== 1) {
    console.log("Erro: Por favor, digite apenas um caractere.");
} else {
    // --- BLOCO DE LÓGICA PRINCIPAL ---
    
    // Declara a variável que irá armazenar o tipo do caractere.
    let tipo;

    // A cadeia 'if...else if...else' testa o caractere contra diferentes padrões Regex em ordem.
    
    // 1ª Verificação: É um número?
    // O padrão Regex /[0-9]/ procura por qualquer dígito entre 0 e 9.
    if (/[0-9]/.test(char)) {
        tipo = "Número";
    } 
    // 2ª Verificação: Se não for um número, é uma letra minúscula?
    // O padrão /[a-z]/ procura por qualquer letra entre 'a' e 'z' minúsculos.
    else if (/[a-z]/.test(char)) {
        tipo = "Letra Minúscula";
    } 
    // 3ª Verificação: Se não for minúscula, é uma letra maiúscula?
    // O padrão /[A-Z]/ procura por qualquer letra entre 'A' e 'Z' maiúsculos.
    else if (/[A-Z]/.test(char)) {
        tipo = "Letra Maiúscula";
    } 
    // 4ª Verificação: Se não for nenhum dos anteriores...
    // O 'else' final captura todos os outros casos (ex: !, @, #, $, %, etc.).
    else {
        tipo = "Símbolo";
    }

    // --- SAÍDA FINAL ---
    // Exibe o caractere digitado e a classificação encontrada.
    console.log(`O caractere "${char}" é um: ${tipo}.`);
}