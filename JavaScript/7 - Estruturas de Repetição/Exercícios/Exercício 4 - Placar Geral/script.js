/*

Somando o Placar Geral (for + Acumulador)

Contexto: Você quer saber o total de pontos que fez no treino somando todos os lances de um array.

O Desafio:

Crie o array const pontosTreino = [2, 3, 2, 2, 3].

Crie uma variável mutável fora do loop chamada let totalPontos = 0.

Use um laço for para percorrer o array de pontos.

Dentro do loop, faça a variável totalPontos somar e acumular o valor do elemento atual (Dica: totalPontos += pontosTreino[i]).

Fora do loop, exiba a mensagem: "O placar total do treino foi: [X] pontos."

*/

// Inicializa uma lista imutável contendo os pontos de cada acerto do treino
const pontosTreino = [2, 3, 2, 2, 3];

// Inicializa uma variável mutável de escopo externo para acumular o valor total da soma
let totalPontos = 0;

// Configura o laço para iterar por todos os elementos do array, do índice zero até o final
for (let i = 0; i < pontosTreino.length; i++) {
    // Utiliza o operador de atribuição de adição (+=) para somar o valor do elemento atual ao total acumulado
    totalPontos += pontosTreino[i];
}

// Exibe no console o resultado da soma total após o encerramento do laço de repetição
console.log("O placar total do treino foi: [" + totalPontos + "] pontos.");

