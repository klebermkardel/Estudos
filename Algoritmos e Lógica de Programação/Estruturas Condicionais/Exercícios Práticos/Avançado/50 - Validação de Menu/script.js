// Validação de Menu - Verifique se a opção escolhida pelo usuário está dentro de um intervalo válido (1-4)

// Importa a biblioteca 'prompt-sync' para entrada de dados.
const prompt = require('prompt-sync')();

// --- EXIBIÇÃO DO MENU ---
// Primeiro, mostramos ao usuário todas as opções disponíveis de forma clara.
console.log("\n--- Menu ---");
console.log("1 - Ver Saldo");
console.log("2 - Sacar");
console.log("3 - Depositar");
console.log("4 - Sair");

// Pede ao usuário que escolha uma opção e a converte para o tipo Number.
const opcao = Number(prompt("Escolha uma opção (1 a 4): "));

// --- BLOCO DE VALIDAÇÃO ---
// Esta condição 'if' é a "guarda" que protege o sistema contra entradas inválidas.
// Ela usa o operador 'OU' (||) para acionar o erro se qualquer uma das regras for quebrada.
// 1. isNaN(opcao): A entrada não é um número.
// 2. !Number.isInteger(opcao): A entrada é um número, mas tem casas decimais (ex: 1.5).
// 3. opcao < 1: A opção é menor que o mínimo permitido.
// 4. opcao > 4: A opção é maior que o máximo permitido.
if (isNaN(opcao) || !Number.isInteger(opcao) || opcao < 1 || opcao > 4) {
    // Se a entrada for inválida, exibe uma mensagem de erro detalhada.
    // Usar a variável 'opcao' na mensagem de erro ajuda o usuário a ver o que digitou de errado.
    console.log(`\nErro: A opção "${opcao}" é inválida. Por favor, escolha um número de 1 a 4.`);
} else {
    // --- MENSAGEM DE SUCESSO ---
    // Se a entrada passar por todas as validações, o programa confirma a seleção.
    // Em um programa real, aqui entraria um 'switch' ou outro 'if' para executar a ação escolhida.
    console.log(`\nOpção "${opcao}" selecionada com sucesso.`);
}