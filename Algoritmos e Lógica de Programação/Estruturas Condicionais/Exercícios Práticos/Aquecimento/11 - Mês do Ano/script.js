// Mês do Ano: Peça um número de 1 a 12 e imprima o nome do mês correspondente. Use a estrutura switch.

const prompt = require('prompt-sync')();

console.log();

const MES_DO_ANO = Number(prompt("Informe um mês do ano (1 a 12): "));

if(isNaN(MES_DO_ANO) || !Number.isInteger(MES_DO_ANO) || MES_DO_ANO < 1 || MES_DO_ANO > 12) {
    console.log("Erro: Por favor, digite um número inteiro válido de 1 a 12.");
} else {
    let mesDoAno;

    switch(MES_DO_ANO) {
        case 1:
            mesDoAno = "Janeiro";
            break;
        case 2:
            mesDoAno = "Fevereiro";
            break;
        case 3:
            mesDoAno = "Março";
            break;
        case 4:
            mesDoAno = "Abril";
            break;
        case 5:
            mesDoAno = "Maio";
            break;
        case 6:
            mesDoAno = "Junho";
            break;
        case 7:
            mesDoAno = "Julho";
            break;
        case 8:
            mesDoAno = "Agosto";
            break;
        case 9:
            mesDoAno = "Setembro";
            break;
        case 10:
            mesDoAno = "Outubro";
            break;
        case 11:
            mesDoAno = "Novembro";
            break;
        case 12:
            mesDoAno = "Dezembro";
            break;
    }

    console.log(`O mês do ano correspondente ao número ${MES_DO_ANO} é ${mesDoAno}`);
}



