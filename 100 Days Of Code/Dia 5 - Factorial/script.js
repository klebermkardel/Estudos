// Função para calcular o fatorial de um número
function calculateFactorial() {
    // Obter o número inserido pelo usuário
    var number = parseInt(document.getElementById("number").value);
    // Obter o elemento onde o resultado será exibido
    var resultElement = document.getElementById("result");

    // Verificar se o número inserido é um número válido
    if (isNaN(number)) {
        resultElement.textContent = "Por favor, insira um número válido.";
        return;
    }

    // Verificar se o número é negativo
    if (number < 0) {
        resultElement.textContent = "O fatorial de um número negativo não é definido.";
        return;
    }

    // Verificar se o número é zero (caso especial)
    if (number === 0) {
        resultElement.textContent = "O fatorial de 0 é 1.";
        return;
    }

    // Calcular o fatorial do número
    var factorial = 1;
    for (var i = 1; i <= number; i++) {
        factorial *= i;
    }

    // Exibir o resultado
    resultElement.textContent = "O fatorial de " + number + " é " + factorial + ".";
}
