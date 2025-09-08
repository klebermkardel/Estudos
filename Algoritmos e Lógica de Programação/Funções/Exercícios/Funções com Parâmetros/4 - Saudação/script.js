// Saudação Personalizada: Crie uma função chamada saudacaoPersonalizada que receba um nome como parâmetro e imprima "Olá, [nome]!". Chame a função passando seu próprio nome.

const prompt = require('prompt-sync')();

// --- 1. PREPARAÇÃO DA ENTRADA ---
// O nome é pedido e tratado (removendo espaços extras) ANTES da chamada da função.
const nomeDigitado = prompt("Digite o seu nome: ");
const nomeLimpo = nomeDigitado.trim();

// --- 2. DECLARAÇÃO DA FUNÇÃO ---
// A função agora recebe um parâmetro chamado 'nome'.
// O nome que foi digitado fora da função (nomeLimpo) será passado para este parâmetro.
const saudacaoPersonalizada = (nome) => {
    // A função apenas usa o parâmetro 'nome' que ela recebeu.
    console.log(`Olá, ${nome}!`);
};

// --- 3. CHAMADA DA FUNÇÃO ---
// Chamamos a função, passando a constante 'nomeLimpo' como argumento.
// O valor de 'nomeLimpo' ("Fulano") é copiado para o parâmetro 'nome' da função.
saudacaoPersonalizada(nomeLimpo);