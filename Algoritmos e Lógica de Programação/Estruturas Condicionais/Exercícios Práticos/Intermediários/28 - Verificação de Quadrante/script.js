// Peça coordenadas X e Y e determine o quadrante.

const prompt = require('prompt-sync')();
console.log("\n--- Verificador de Quadrante Cartesiano ---");

const x = Number(prompt("Digite a coordenada X: "));
const y = Number(prompt("Digite a coordenada Y: "));

if (isNaN(x) || isNaN(y)) {
    console.log("Erro: Por favor, digite coordenadas numéricas válidas.");
} else {
    let localizacao;

    if (x === 0 && y === 0) {
        localizacao = "Origem";
    } else if (x === 0) {
        localizacao = "Eixo Y";
    } else if (y === 0) {
        localizacao = "Eixo X";
    } else if (x > 0 && y > 0) {
        localizacao = "Quadrante 1";
    } else if (x < 0 && y > 0) {
        localizacao = "Quadrante 2";
    } else if (x < 0 && y < 0) {
        localizacao = "Quadrante 3";
    } else { // x > 0 && y < 0
        localizacao = "Quadrante 4";
    }

    console.log(`O ponto (${x}, ${y}) está na/no: ${localizacao}.`);
}