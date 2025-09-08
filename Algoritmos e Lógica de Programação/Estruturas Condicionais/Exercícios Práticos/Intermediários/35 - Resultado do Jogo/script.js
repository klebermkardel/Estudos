// Peça o placar de um jogo e declare o vencedor ou empate.

const prompt = require('prompt-sync')();
console.log("\n--- Verificador de Resultado de Jogo ---");

const golsTimeA = Number(prompt("Gols do Time A: "));
const golsTimeB = Number(prompt("Gols do Time B: "));

if (isNaN(golsTimeA) || isNaN(golsTimeB) || !Number.isInteger(golsTimeA) || !Number.isInteger(golsTimeB) || golsTimeA < 0 || golsTimeB < 0) {
    console.log("Erro: Por favor, digite um placar válido (números inteiros e positivos).");
} else {
    let resultado;

    if (golsTimeA > golsTimeB) {
        resultado = "Time A venceu!";
    } else if (golsTimeB > golsTimeA) {
        resultado = "Time B venceu!";
    } else {
        resultado = "O jogo terminou em empate!";
    }

    console.log(`\nPlacar: Time A ${golsTimeA} x ${golsTimeB} Time B`);
    console.log(`Resultado: ${resultado}`);
}