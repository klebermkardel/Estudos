/*

Exercício 3: Peneira do Treino (Arrow Function + .filter())

Contexto: No seu treino de basquete, você quer analisar apenas os seus arremessos de elite: aqueles que valeram 3 pontos (lances de longa distância).

O Desafio:

1. Crie o array const pontuacoes = [2, 0, 3, 2, 3, 0, 3].

2. Use o método .filter() para gerar um novo array chamado apenasCestasDeTres.

3. A condição deve reter apenas os números que forem exatamente iguais a 3.

4. Imprima o novo array e use o .length nele para exibir a mensagem: "Eu acertei [X] lances de 3 pontos hoje!".

*/

// Inicializa o array com o histórico de pontuações do treino
const pontuacoes = [2, 0, 3, 2, 3, 0, 3];

// FILTER: Avalia cada elemento e gera um novo array retendo apenas os que são estritamente iguais a 3
const apenasCestasDeTres = pontuacoes.filter(ponto => ponto === 3);

// Exibe a mensagem formatada utilizando a propriedade .length para obter a contagem de acertos
console.log("Eu acertei " + apenasCestasDeTres.length + " lances de 3 pontos hoje!");