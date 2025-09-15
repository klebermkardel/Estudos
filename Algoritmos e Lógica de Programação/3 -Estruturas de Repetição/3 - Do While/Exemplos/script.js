const prompt = require('prompt-sync')();

let opcao;

do {
    console.log("\n--- Menu ---");
    console.log("1 - Ver Saldo");
    console.log("2 - Sair");
    opcao = prompt("Escolha uma opção: ");

    if(opcao === '1') {
        console.log("Seu saldo é de R$ 100,00.");
    }
} while (opcao !== '2'); // O laço continua quanto a opção NÃO for '2'

console.log("Obrigado por usar o sistema!");