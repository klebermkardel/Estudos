// Calculadora com Função: Crie uma única função chamada calcular que receba três parâmetros: numeroA, numeroB e operador. Dentro da função, use um switch (ou if/else if) para verificar qual é o operador e retornar o resultado da operação matemática correta. Lide também com o caso de divisão por zero.

const prompt = require('prompt-sync')();

// --- DECLARAÇÃO DA FUNÇÃO ---
// A função encapsula toda a lógica de cálculo.
const calcular = (numA, numB, operador) => {
    switch (operador) {
        case '+':
            return numA + numB; // Retornamos o resultado diretamente
        case '-':
            return numA - numB;
        case '*':
            return numA * numB;
        case '/':
            // Tratamento do caso de erro específico
            if (numB === 0) {
                return "Erro: Divisão por zero não é permitida.";
            }
            return numA / numB;
        default:
            // Tratamento para operadores inválidos
            return "Erro: Operador inválido.";
    }
};

// --- SCRIPT PRINCIPAL ---
console.log("\n--- Calculadora com Função ---");
const num1 = Number(prompt("Digite o primeiro número: "));
const num2 = Number(prompt("Digite o segundo número: "));
const op = prompt("Digite o operador (+, -, *, /): ");

if (isNaN(num1) || isNaN(num2)) {
    console.log("Erro: As entradas numéricas são inválidas.");
} else {
    // Chamamos a função e guardamos o resultado.
    const resultado = calcular(num1, num2, op);

    // Verificamos se o resultado é um número ou uma string de erro.
    if (typeof resultado === 'number') {
        console.log(`\nO resultado de ${num1} ${op} ${num2} é: ${resultado}`);
    } else {
        // Se não for um número, é a mensagem de erro retornada pela função.
        console.log(`\n${resultado}`);
    }
}