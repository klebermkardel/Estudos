// Peça três números e os imprima em ordem crescente.

const prompt = require('prompt-sync')();
console.log("\n--- Ordenador de Números ---");

const n1 = Number(prompt("Digite o primeiro número: "));
const n2 = Number(prompt("Digite o segundo número: "));
const n3 = Number(prompt("Digite o terceiro número: "));

if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
    console.log("Erro: Por favor, digite apenas números.");
} else {
    let ordem;

    if (n1 <= n2 && n2 <= n3) {
        ordem = `${n1}, ${n2}, ${n3}`;
    } else if (n1 <= n3 && n3 <= n2) {
        ordem = `${n1}, ${n3}, ${n2}`;
    } else if (n2 <= n1 && n1 <= n3) {
        ordem = `${n2}, ${n1}, ${n3}`;
    } else if (n2 <= n3 && n3 <= n1) {
        ordem = `${n2}, ${n3}, ${n1}`;
    } else if (n3 <= n1 && n1 <= n2) {
        ordem = `${n3}, ${n1}, ${n2}`;
    } else { // O último caso possível
        ordem = `${n3}, ${n2}, ${n1}`;
    }

    console.log(`\nOs números em ordem crescente são: ${ordem}`);
}