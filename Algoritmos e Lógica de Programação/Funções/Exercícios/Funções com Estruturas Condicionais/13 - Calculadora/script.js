// Calculadora com Função: Crie uma única função chamada calcular que receba três parâmetros: numeroA, numeroB e operador. Dentro da função, use um switch (ou if/else if) para verificar qual é o operador e retornar o resultado da operação matemática correta. Lide também com o caso de divisão por zero.


const prompt = require('prompt-sync')();

const calcular = (numA, numB, operador) => {
    switch (operador) {
        case '+':
            return numA + numB; 
        case '-':
            return numA - numB;
        case '*':
            return numA * numB;
        case '/':
            if (numB === 0) {
                return "Erro: Divisão por zero não é permitida.";
            }
            return numA / numB;
        default:
            return "Erro: Operador inválido.";
    }
};

console.log("\n--- Calculadora com Função ---");
const num1 = Number(prompt("Digite o primeiro número: "));
const num2 = Number(prompt("Digite o segundo número: "));
const op = prompt("Digite o operador (+, -, *, /): ");

if (isNaN(num1) || isNaN(num2)) {
    console.log("Erro: As entradas numéricas são inválidas.");
} else {
    const resultado = calcular(num1, num2, op);

    if (typeof resultado === 'number') {
        console.log(`\nO resultado de ${num1} ${op} ${num2} é: ${resultado}`);
    } else {
        console.log(`\n${resultado}`);
    }
}