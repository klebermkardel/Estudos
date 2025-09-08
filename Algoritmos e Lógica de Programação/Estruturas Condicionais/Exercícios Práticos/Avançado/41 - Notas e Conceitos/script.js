// Peça uma nota de 0 a 10 e atribua um conceito: A (9-10), B (7-8.9), C (5-6.9), D (3-4.9), F (0-2.9).

const prompt = require('prompt-sync')();
console.log("\n--- Conversor de Notas para Conceito ---");

const nota = Number(prompt("Digite a nota (0 a 10): "));

if (isNaN(nota) || nota < 0 || nota > 10) {
    console.log("Erro: Por favor, informe uma nota válida entre 0 e 10.");
} else {
    let conceito;

    if (nota >= 9) {
        conceito = "A";
    } else if (nota >= 7) {
        conceito = "B";
    } else if (nota >= 5) {
        conceito = "C";
    } else if (nota >= 3) {
        conceito = "D";
    } else {
        conceito = "F";
    }

    console.log(`O conceito correspondente à nota ${nota} é: ${conceito}.`);
}