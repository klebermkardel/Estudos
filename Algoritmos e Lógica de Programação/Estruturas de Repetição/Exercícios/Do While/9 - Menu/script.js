// Crie um menu simples com as opções "1. Ver Mensagem" e "2. Sair". Use um laço do...while para garantir que o menu seja exibido pelo menos uma vez. O laço deve continuar repetindo até que o usuário digite a opção "2".

const prompt = require('prompt-sync')();

let opcao;

do {
    console.log("\n--- MENU ---");
    console.log("1 - Ver Mensagem");
    console.log("2 - Sair");
    
    const entrada = prompt("Escolha uma opção: ");
    opcao = entrada ? entrada.trim() : '';
    switch (opcao) {
        case '1':
            console.log("==> Olá! Seja bem-vindo ao sistema! <==");
            break;
        case '2':
            console.log("==> Saindo do sistema... <==");
            break;
        default:
            console.log("==> Opção inválida! Por favor, escolha 1 ou 2. <==");
            break;
    }

} while (opcao !== '2');

console.log("\nObrigado por usar o sistema!");