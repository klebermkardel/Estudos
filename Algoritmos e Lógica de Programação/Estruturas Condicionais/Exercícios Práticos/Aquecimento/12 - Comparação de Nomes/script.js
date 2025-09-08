// Comparação de Nomes: Peça dois nomes e verifique se eles são iguais.

const prompt = require('prompt-sync')();

console.log("\n--- Comparador de Nomes ---");
const nome1 = prompt("Digite o primeiro nome: ");
const nome2 = prompt("Digite o segundo nome: ");

if (!nome1.trim() || !nome2.trim()) {
    console.log("Erro: Ambos os nomes devem ser preenchidos.");
} else {
    const nome1Normalizado = nome1.trim().toLowerCase();
    const nome2Normalizado = nome2.trim().toLowerCase();

    if (nome1Normalizado === nome2Normalizado) {
        console.log(`Os nomes "${nome1}" e "${nome2}" são IGUAIS.`);
    } else {
        console.log(`Os nomes "${nome1}" e "${nome2}" são DIFERENTES.`);
    }
}