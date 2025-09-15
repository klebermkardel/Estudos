// Crie um programa que determine o maior de três números.

// Importa a biblioteca 'prompt-sync' para permitir a entrada de dados pelo usuário.
const prompt = require('prompt-sync')();

// Pede ao usuário para informar os três números.
// A função Number() tenta converter o texto digitado para o tipo numérico.
const numero1 = Number(prompt("Informe o primeiro número: "));
const numero2 = Number(prompt("Informe o segundo número: "));
const numero3 = Number(prompt("Informe o terceiro número: "));

// Imprime uma linha em branco para melhorar a legibilidade.
console.log("");

// --- BLOCO DE VALIDAÇÃO ---
// Verificamos se CADA UMA das entradas é um número inteiro válido.
// A condição usa o operador OU (||), então se QUALQUER uma das verificações falhar,
// o bloco de erro será executado.
if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3) || 
    !Number.isInteger(numero1) || !Number.isInteger(numero2) || !Number.isInteger(numero3)) {
    
    console.log("Erro: Por favor, informe três números inteiros válidos.");

} else {
    // --- BLOCO DE LÓGICA PRINCIPAL ---
    // Este código só é executado se todas as entradas forem válidas.
    
    // 1ª Verificação: Checamos se o numero1 é o maior.
    // Ele precisa ser maior ou igual ao numero2 E (&&) maior ou igual ao numero3.
    // Usamos '>=' para lidar corretamente com casos de empate (ex: 10, 5, 10).
    if (numero1 >= numero2 && numero1 >= numero3) {
        console.log(`O número ${numero1} é o maior!`);
    } 
    // 2ª Verificação: Este bloco só é executado se a primeira condição for FALSA.
    // Ou seja, já sabemos que o numero1 NÃO é o maior.
    // Agora, verificamos se o numero2 é o maior.
    else if (numero2 >= numero1 && numero2 >= numero3) {
        console.log(`O número ${numero2} é o maior!`);
    } 
    // 3ª Verificação: Se o programa chegou até aqui, significa que as duas condições anteriores
    // foram falsas. Por eliminação lógica, se nem o numero1 nem o numero2 são os maiores,
    // então o numero3 só pode ser o maior.
    else {
        console.log(`O número ${numero3} é o maior!`);
    }
}
