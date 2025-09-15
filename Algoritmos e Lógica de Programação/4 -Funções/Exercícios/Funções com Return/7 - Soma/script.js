// Soma: Crie uma função chamada somar que receba dois números como parâmetros e retorne a soma deles. Chame a função, armazene o resultado em uma variável e imprima essa variável.

const prompt = require('prompt-sync')();

// --- 1. DECLARAÇÃO DA FUNÇÃO ---
// A função 'somar' recebe dois parâmetros ('num1' e 'num2') e retorna o resultado.
const somar = (num1, num2) => {
    // Calcula a soma dos dois números que a função recebeu.
    const resultado = num1 + num2;
    // O comando 'return' é fundamental, pois ele especifica o valor que a função "devolve"
    // para quem a chamou.
    return resultado;
};
// Nota: Uma versão mais concisa e moderna seria: const somar = (num1, num2) => num1 + num2;

// --- 2. ENTRADA DE DADOS E VALIDAÇÃO ---
const numero1 = Number(prompt("Digite o 1º número: "));
const numero2 = Number(prompt("Digite o 2º número: "));

// Validação corrigida: Apenas checamos se as entradas são números.
// Removemos a verificação de 'isInteger' e de 'negativos' para tornar a função mais versátil.
if (isNaN(numero1) || isNaN(numero2)) {
    console.log("Erro: Por favor, digite apenas números válidos.");
} else {
    // --- 3. CHAMADA DA FUNÇÃO E SAÍDA ---
    
    // O enunciado pedia para armazenar o resultado em uma variável.
    const resultadoDaSoma = somar(numero1, numero2); // A função 'somar' é chamada aqui.
    
    // E depois, imprimimos a variável.
    console.log(`\nO resultado da soma é: ${resultadoDaSoma}`);
}