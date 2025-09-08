// Calculadora Simples: Peça dois números e um operador (+, -, *, /). Realize a operação e mostre o resultado.

// Importa a biblioteca para entrada de dados.
const prompt = require('prompt-sync')();

// Exibe o título da aplicação.
console.log("\n--- Calculadora --- \n");

// Pede ao usuário os dois números e o operador.
// Os números são convertidos para o tipo Number, permitindo decimais.
const num1 = Number(prompt("Digite o primeiro número: "));
const num2 = Number(prompt("Digite o segundo número: "));
// O operador é mantido como string para ser usado no switch.
const operador = prompt("Digite o operador (+, -, *, /): ");

// --- BLOCO DE VALIDAÇÃO ---
// A validação é feita em etapas usando if...else if.

// 1ª Verificação: Garante que as duas primeiras entradas são números.
if (isNaN(num1) || isNaN(num2)) {
    console.log("Erro: Por favor, digite apenas números.");
} 
// 2ª Verificação: Se os números são válidos, verifica o operador.
// A condição checa se o operador NÃO é '+', E NÃO é '-', E NÃO é '*', E NÃO é '/'.
// Se todas essas forem verdadeiras, o operador é inválido.
else if (operador !== '+' && operador !== '-' && operador !== '*' && operador !== '/') {
    console.log("Erro: Operador inválido. Use +, -, * ou /.");
} 
// Se todas as entradas forem válidas, o programa segue para a lógica principal.
else {
    // --- BLOCO DE LÓGICA PRINCIPAL ---
    
    // Declara a variável 'resultado' que será calculada dentro do switch.
    let resultado;

    // A estrutura 'switch' é perfeita para executar diferentes blocos de código
    // com base no valor da variável 'operador'.
    switch (operador) {
        case '+':
            resultado = num1 + num2;
            break; // 'break' impede a execução dos casos seguintes.
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            // --- VALIDAÇÃO DE CASO ESPECIAL ---
            // Dentro do caso de divisão, verificamos se o divisor (num2) é zero.
            if (num2 === 0) {
                console.log("\nErro: Não é possível dividir por zero.");
                // 'return' encerra a execução do script imediatamente,
                // pois não há um resultado válido para exibir.
                return;
            }
            // Se num2 não for zero, a divisão é realizada.
            resultado = num1 / num2;
            break;
    }

    // --- SAÍDA FINAL ---
    // Exibe a operação completa e o resultado para o usuário.
    console.log(`\nO resultado de ${num1} ${operador} ${num2} é: ${resultado}`);
}

// Exibe uma linha final para indicar o fim do programa.
console.log("\n-------------------");