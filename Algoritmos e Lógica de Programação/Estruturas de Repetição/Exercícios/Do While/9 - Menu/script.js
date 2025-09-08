// Crie um menu simples com as opções "1. Ver Mensagem" e "2. Sair".
// Use um laço do...while para garantir que o menu seja exibido pelo menos uma vez.
// O laço deve continuar repetindo até que o usuário digite a opção "2".

// Importa a biblioteca 'prompt-sync' para entrada de dados.
const prompt = require('prompt-sync')();

// Declara a variável 'opcao' fora do laço com 'let', pois seu valor será
// atualizado a cada iteração e precisará ser lido na condição 'while'.
let opcao;

// --- LAÇO DO...WHILE ---
// A principal característica deste laço é que o bloco 'do' sempre executa
// pelo menos uma vez, ANTES de a condição 'while' ser testada.
// Isso é perfeito para menus, que sempre devem ser exibidos na primeira vez.
do {
    // Exibe as opções do menu para o usuário a cada repetição.
    console.log("\n--- MENU ---");
    console.log("1 - Ver Mensagem");
    console.log("2 - Sair");
    
    // Pede ao usuário que escolha uma opção.
    const entrada = prompt("Escolha uma opção: ");

    // Trata a entrada para evitar erros.
    // 'entrada ? entrada.trim() : ''': É uma forma segura de garantir que, se o usuário
    // não digitar nada (entrada for nula), 'opcao' se torne uma string vazia ''.
    // O .trim() remove espaços extras.
    opcao = entrada ? entrada.trim() : '';

    // --- LÓGICA DO MENU ---
    // A estrutura 'switch' é ideal para lidar com as diferentes opções do menu.
    switch (opcao) {
        case '1':
            console.log("==> Olá! Seja bem-vindo ao sistema! <==");
            break;
        case '2':
            console.log("==> Saindo do sistema... <==");
            break;
        // O bloco 'default' captura qualquer entrada que não seja '1' ou '2',
        // como '3', "texto", ou uma string vazia.
        default:
            console.log("==> Opção inválida! Por favor, escolha 1 ou 2. <==");
            break;
    }

} while (opcao !== '2'); // A condição é testada no FINAL. O laço repete enquanto a opção NÃO for '2'.

// --- SAÍDA FINAL ---
// Este código só é executado quando o laço termina, ou seja, quando o usuário digita '2'.
console.log("\nObrigado por usar o sistema!");