// Dia da Semana: Peça um número de 1 a 7 e imprima o dia da semana correspondente.
// Use a estrutura switch.

// Importa a biblioteca 'prompt-sync' para a entrada de dados.
const prompt = require('prompt-sync')();

// Imprime uma linha em branco para formatação.
console.log();

// Pede ao usuário para informar um número e o converte para o tipo Number.
const DIA_DA_SEMANA = Number(prompt("Informe um dia da semana (1 a 7): "));

// --- BLOCO DE VALIDAÇÃO ---
// Esta condição composta é a "guarda" do nosso programa. Se qualquer parte for verdadeira,
// o código exibe um erro e não continua para a lógica principal.
// 1. isNaN(...): Verifica se a entrada não é um número.
// 2. !Number.isInteger(...): Verifica se o número não é inteiro.
// 3. DIA_DA_SEMANA < 1 || DIA_DA_SEMANA > 7: Verifica se o número está fora do intervalo válido (1 a 7).
if (isNaN(DIA_DA_SEMANA) || !Number.isInteger(DIA_DA_SEMANA) || DIA_DA_SEMANA < 1 || DIA_DA_SEMANA > 7) {
    console.log("Erro: Por favor, digite um número inteiro válido de 1 a 7.");
} else {
    // --- BLOCO DE LÓGICA PRINCIPAL ---
    // Este bloco só executa se a entrada for um número inteiro entre 1 e 7.

    // Declaramos uma variável com 'let' para que possamos atribuir a ela o nome do dia.
    let nomeDoDia;

    // A estrutura 'switch' é ideal aqui, pois estamos comparando o valor de uma única
    // variável (DIA_DA_SEMANA) com vários casos possíveis.
    switch (DIA_DA_SEMANA) {
        // O switch compara DIA_DA_SEMANA com cada 'case' usando igualdade estrita (===).
        case 1:
            nomeDoDia = "Domingo";
            // O 'break' é crucial. Ele impede que o código "caia" e execute o próximo case.
            break;
        case 2:
            // Corrigindo um pequeno typo, adicionando "-feira" para padronizar.
            nomeDoDia = "Segunda-feira";
            break;
        case 3:
            nomeDoDia = "Terça-feira";
            break;
        case 4:
            nomeDoDia = "Quarta-feira";
            break;
        case 5:
            nomeDoDia = "Quinta-feira";
            break;
        case 6:
            nomeDoDia = "Sexta-feira";
            break;
        case 7:
            nomeDoDia = "Sábado";
            break;
        // Não precisamos de um 'default' aqui porque a validação inicial já garante
        // que o número estará entre 1 e 7, então um dos casos acima sempre será verdadeiro.
    }

    // --- SAÍDA FINAL ---
    // Imprimimos o resultado final uma única vez, de forma limpa.
    console.log(`O dia correspondente ao número ${DIA_DA_SEMANA} é ${nomeDoDia}.`);
}