// Validação de Menu - Verifique se a opção escolhida pelo usuário está dentro de um intervalo válido (1-4)

const prompt = require('prompt-sync')();
console.log("\n--- Menu ---");
console.log("1 - Ver Saldo");
console.log("2 - Sacar");
console.log("3 - Depositar");
console.log("4 - Sair");

const opcao = Number(prompt("Escolha uma opção (1 a 4): "));

if (isNaN(opcao) || !Number.isInteger(opcao) || opcao < 1 || opcao > 4) {
    console.log(`\nErro: A opção "${opcao}" é inválida. Por favor, escolha um número de 1 a 4.`);
} else {
    console.log(`\nOpção "${opcao}" selecionada com sucesso.`);
}