// Dobro do Número: Crie uma função chamada calcularDobro que receba um número como parâmetro e imprima o dobro desse número.

const prompt = require('prompt-sync')();

// --- 1. DECLARAÇÃO DA FUNÇÃO ---
// A função agora tem uma única e clara responsabilidade: receber um número ('num')
// e imprimir o seu dobro. Ela não sabe de onde esse número veio (prompt, etc).
const calcularDobro = (num) => {
    // Calcula o dobro do número que foi recebido como parâmetro.
    const resultado = num * 2;
    // Imprime o resultado de forma clara.
    console.log(`O dobro de ${num} é ${resultado}`);
};

// --- 2. ENTRADA E VALIDAÇÃO (Fora da Função) ---
// A parte principal do script cuida da interação com o usuário.
const numeroDigitado = Number(prompt("Digite um número inteiro: "));

// Validamos a entrada ANTES de decidir se vamos chamar a função.
if (isNaN(numeroDigitado) || !Number.isInteger(numeroDigitado)) {
    console.log("Erro: Por favor, digite um número inteiro válido");
} else {
    // --- 3. CHAMADA DA FUNÇÃO ---
    // Apenas se a entrada for válida, nós chamamos a função 'calcularDobro',
    // passando o 'numeroDigitado' como argumento.
    // O valor de 'numeroDigitado' será copiado para o parâmetro 'num' da função.
    calcularDobro(numeroDigitado);
}