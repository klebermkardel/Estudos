// Dia da Semana: Peça um número de 1 a 7 e imprima o dia da semana correspondente (1 para Domingo, 2 para Segunda, etc.). Use a estrutura switch.

const prompt = require('prompt-sync')();

console.log();

const DIA_DA_SEMANA = Number(prompt("Informe um dia da semana (1 a 7): "));

if(isNaN(DIA_DA_SEMANA) || !Number.isInteger(DIA_DA_SEMANA) || DIA_DA_SEMANA < 1 || DIA_DA_SEMANA > 7) {
    console.log("Erro: Por favor, digite um número inteiro válido de 1 a 7.");
} else {
    let nomeDoDia;

    switch(DIA_DA_SEMANA) {
        case 1:
            nomeDoDia = "Domingo";
            break;
        case 2:
            nomeDoDia = "Segunda"
            break;
        case 3:
            nomeDoDia = "Terça";
            break;
        case 4:
            nomeDoDia = "Quarta";
            break;
        case 5:
            nomeDoDia = "Quinta";
            break;
        case 6:
            nomeDoDia = "Sexta";
            break;
        case 7:
            nomeDoDia = "Sábado";
            break;
    }

    console.log(`O dia correspondente ao número ${DIA_DA_SEMANA} é ${nomeDoDia}`);
}