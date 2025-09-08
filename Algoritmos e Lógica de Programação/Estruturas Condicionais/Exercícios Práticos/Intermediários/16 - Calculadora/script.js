// Calculadora Simples: Peça dois números e um operador (+, -, *, /). Realize a operação e mostre o resultado.

const prompt = require('prompt-sync')();

console.log("\n--- Calculadora --- \n");

const num1 = Number(prompt("Digite o primeiro número: "));
const num2 = Number(prompt("Digite o segundo número: "));
const operador = prompt("Digite o operador (+, -, *, /): ");

if(isNaN(num1) || isNaN(num2)) {
    console.log("Erro: Por favor, digite apenas números: ");
} else if(operador !== '+' && operador !== '-' && operador !== '*' && operador !== '/') {
    console.log("Erro: Operador inválido. Use +, -, * ou /.");
} else {
    let resultado;

    switch(operador) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            if(num2 === 0) {
                console.log("\nErro: Não é possível dividir por zero.");
                return;
            }
            resultado = num1 / num2;
            break;
    }

    console.log(`\nO resultado de ${num1} ${operador} ${num2} é: ${resultado}`);
}

console.log("\n-------------------")