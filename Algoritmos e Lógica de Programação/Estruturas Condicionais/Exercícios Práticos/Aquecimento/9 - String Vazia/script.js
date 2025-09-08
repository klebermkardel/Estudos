// Verifique se uma string fornecida pelo usuário está vazia ou não.

// Importa a biblioteca 'prompt-sync'.
const prompt = require('prompt-sync')();

// Imprime uma linha em branco para espaçamento.
console.log();

// Pede ao usuário para digitar um texto e armazena na constante.
const textoDigitado = prompt("Digite algo: ");

// --- BLOCO DE LÓGICA PRINCIPAL ---
// Esta é uma verificação concisa e poderosa que usa o conceito de "falsy" do JavaScript.
// A lógica acontece em três passos:
// 1. textoDigitado.trim(): Primeiro, removemos todos os espaços em branco do início e do fim.
//    Se o usuário digitou "   ", o resultado será "". Se digitou "", o resultado continua "".
// 2. O valor "" (string vazia) é considerado "falsy" (falso) em um contexto booleano como um 'if'.
//    Qualquer outra string (ex: "olá") é considerada "truthy" (verdadeira).
// 3. O operador '!' (NÃO) inverte o valor booleano. Então, !false se torna 'true'.
// Portanto, a condição será verdadeira APENAS se a string estiver vazia ou contiver apenas espaços.
if (!textoDigitado.trim()) {
    // Se a condição for verdadeira, exibe a mensagem de string vazia.
    console.log("Essa é uma string vazia");
} else {
    // Se a condição for falsa, significa que a string tem conteúdo.
    // Exibimos o texto original que o usuário digitou.
    console.log(textoDigitado);
}