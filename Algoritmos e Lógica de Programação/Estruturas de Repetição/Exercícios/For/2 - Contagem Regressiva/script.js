// Contagem Regressiva: Escreva um programa que use um laço for para imprimir os números de 10 a 1 no console.

// --- CONFIGURAÇÃO ---
// Definimos o ponto de partida e o ponto final da contagem em constantes.
const inicioContagem = 10;
const fimContagem = 1;

// --- LAÇO FOR (REGRESSIVO) ---
// A estrutura do laço é adaptada para a contagem regressiva:
// 1. let i = inicioContagem: A inicialização. A variável 'i' começa valendo 10.
// 2. i >= fimContagem: A condição. O laço continua ENQUANTO 'i' for maior ou igual a 1.
// 3. i--: O decremento. Ao final de cada repetição, 'i' diminui em 1.
for (let i = inicioContagem; i >= fimContagem; i--) {
    // A cada repetição, o valor atual de 'i' é impresso no console.
    console.log(i);
}