// Exibir Informações: Crie uma função chamada mostrarInfo que receba três parâmetros: nome, idade e cidade. A função deve imprimir a frase: "Olá, meu nome é [nome], tenho [idade] anos e moro em [cidade]."

// Importa a biblioteca 'prompt-sync'.
const prompt = require('prompt-sync')();

// --- 1. DECLARAÇÃO DA FUNÇÃO ---
// A função é declarada no início. Sua única responsabilidade é receber
// três "ingredientes" (nome, idade, cidade) e exibi-los.
// Ela é uma "especialista" em formatação de saída.
const mostrarInfo = (nome, idade, cidade) => {
    console.log(`\nOlá, meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}.`);
};

// --- 2. ENTRADA E TRATAMENTO DE DADOS ---
// A parte principal do script lida com a interação com o usuário.
const nomeDigitado = prompt("Digite o seu nome: ");
const nomeLimpo = nomeDigitado.trim(); // Remove espaços extras do nome.

const idade = Number(prompt("Digite a sua idade: "));

const cidadeDigitada = prompt("Digite a sua cidade: ");
const cidadeLimpa = cidadeDigitada.trim(); // Remove espaços extras da cidade.


// --- 3. VALIDAÇÃO DOS DADOS ---
// Verificamos se todos os dados inseridos são válidos ANTES de chamar a função.
// MELHORIA: Adicionamos a checagem para nome e cidade vazios (!nomeLimpo || !cidadeLimpa).
if (isNaN(idade) || !Number.isInteger(idade) || idade <= 0 || !nomeLimpo || !cidadeLimpa) {
    console.log("Erro: Por favor, preencha todos os campos com informações válidas.");
} else {
    // --- 4. CHAMADA DA FUNÇÃO ---
    // Apenas se todos os dados forem válidos, a função é chamada.
    // Passamos as variáveis tratadas (nomeLimpo, idade, cidadeLimpa) como argumentos.
    mostrarInfo(nomeLimpo, idade, cidadeLimpa);
}