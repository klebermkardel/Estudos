// Contagem Simples: Escreva um programa que use um laço for para imprimir os números de 1 a 10 no console.

// --- CONFIGURAÇÃO ---
// É uma boa prática usar constantes para definir os limites do laço.
// Isso torna o código mais flexível e fácil de ler.
const inicioContagem = 1;
const fimContagem = 10;

// --- LAÇO FOR ---
// O laço 'for' tem três partes:
// 1. let i = inicioContagem: A inicialização. A variável 'i' começa valendo 1.
// 2. i <= fimContagem: A condição. O laço continua ENQUANTO 'i' for menor ou igual a 10.
// 3. i++: O incremento. Ao final de cada repetição, 'i' aumenta em 1.
for (let i = inicioContagem; i <= fimContagem; i++) {
    // A cada repetição, esta linha é executada.
    // Ela imprime o valor atual da variável 'i'.
    console.log(i);
}