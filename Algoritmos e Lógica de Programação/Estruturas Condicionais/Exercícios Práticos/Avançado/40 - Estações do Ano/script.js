// Peça um mês e determine a estação do ano.

// Exercício 40: Estações do Ano
const prompt = require('prompt-sync')();
console.log("\n--- Determinador de Estação do Ano ---");

const mes = Number(prompt("Digite o número do mês (1-12): "));

if (isNaN(mes) || !Number.isInteger(mes) || mes < 1 || mes > 12) {
    console.log("Erro: Digite um número de mês válido (1-12).");
} else {
    let estacao;

    switch (mes) {
        case 12:
        case 1:
        case 2:
            estacao = "Verão ☀️";
            break;
        case 3:
        case 4:
        case 5:
            estacao = "Outono 🍂";
            break;
        case 6:
        case 7:
        case 8:
            estacao = "Inverno ❄️";
            break;
        case 9:
        case 10:
        case 11:
            estacao = "Primavera 🌸";
            break;
    }
    console.log(`O mês ${mes} corresponde à estação: ${estacao}`);
}