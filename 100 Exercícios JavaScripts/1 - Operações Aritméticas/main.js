// Escreva um programa que solicite ao usuário dois números e exiba a soma, subtração, multiplicação e divisão entre eles

function calc() {
    // Obtém os valores dos inputs e converte para números inteiros
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);

    // Calcula a soma, subtração, multiplicação e divisão
    const soma = num1 + num2;
    const subtracao = num1 - num2;
    const multiplicacao = num1 * num2;
    const divisao = num1 / num2;

    // Exibe os resultados
    document.getElementById('soma').textContent = `Soma: ${soma}`;
    document.getElementById('subtracao').textContent = `Subtração: ${subtracao}`;
    document.getElementById('multiplicacao').textContent = `Multiplicação: ${multiplicacao}`;
    document.getElementById('divisao').textContent = `Divisão: ${divisao}`;
}