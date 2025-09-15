// Peça coordenadas X e Y e determine o quadrante.

// Importa a biblioteca 'prompt-sync' para a entrada de dados.
const prompt = require('prompt-sync')();

// Exibe um título para o programa.
console.log("\n--- Verificador de Quadrante Cartesiano ---");

// Pede ao usuário que digite as coordenadas X e Y e as converte para o tipo Number.
const x = Number(prompt("Digite a coordenada X: "));
const y = Number(prompt("Digite a coordenada Y: "));

// --- BLOCO DE VALIDAÇÃO ---
// Garante que ambas as entradas, X e Y, sejam números válidos.
if (isNaN(x) || isNaN(y)) {
    console.log("Erro: Por favor, digite coordenadas numéricas válidas.");
} else {
    // --- BLOCO DE LÓGICA PRINCIPAL ---
    
    // Declara a variável que irá armazenar a localização do ponto no plano.
    let localizacao;

    // A ordem das verificações é importante. Começamos com os casos mais específicos
    // (origem e eixos) e depois passamos para os casos mais gerais (quadrantes).

    // 1º Caso: O ponto está na origem (0, 0)?
    if (x === 0 && y === 0) {
        localizacao = "Origem";
    } 
    // 2º Caso: Se não está na origem, o ponto está sobre o Eixo Y? (qualquer ponto com x=0)
    else if (x === 0) {
        localizacao = "Eixo Y";
    } 
    // 3º Caso: Se não está nos casos anteriores, o ponto está sobre o Eixo X? (qualquer ponto com y=0)
    else if (y === 0) {
        localizacao = "Eixo X";
    } 
    // 4º Caso: Se não está nos eixos, verificamos os quadrantes baseados nos sinais de X e Y.
    // Quadrante 1: x positivo E y positivo.
    else if (x > 0 && y > 0) {
        localizacao = "Quadrante 1";
    } 
    // Quadrante 2: x negativo E y positivo.
    else if (x < 0 && y > 0) {
        localizacao = "Quadrante 2";
    } 
    // Quadrante 3: x negativo E y negativo.
    else if (x < 0 && y < 0) {
        localizacao = "Quadrante 3";
    } 
    // O 'else' final captura a única combinação restante: x positivo E y negativo.
    else { 
        localizacao = "Quadrante 4";
    }

    // --- SAÍDA FINAL ---
    // Exibe o resultado de forma clara para o usuário.
    console.log(`O ponto (${x}, ${y}) está na/no: ${localizacao}.`);
}