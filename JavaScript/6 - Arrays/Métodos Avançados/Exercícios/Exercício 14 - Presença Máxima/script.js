/*

Exercício 14: Verificador de Presença Máxima (.reduce() Comparador)

Contexto: O .reduce() não serve só para somar. Ele também serve para comparar itens e achar o maior número de uma lista.

O Desafio:

1. Crie o array const pontuacoesTreino = [12, 15, 8, 21, 14].

2. Use o .reduce() para descobrir o seu recorde de pontos.

3. Dentro da função do reduce, use um ternário ou if: se o valorAtual for maior que o acc, o novo acumulador passa a ser o valorAtual, se não, continua sendo o acc.

4. Dica: const maiorPontuacao = pontuacoesTreino.reduce((acc, valorAtual) => valorAtual > acc ? valorAtual : acc, 0);

5. Rode o código e entenda o fluxo dessa comparação no console.

*/

// Inicializa o array com o histórico de pontuações de múltiplos treinos
const pontuacoesTreino = [12, 15, 8, 21, 14];

// REDUCE COMPARADOR: Usa o acumulador para reter o "campeão" atual da lista.
// Em cada rodada, o operador ternário checa se o número lido é maior que o recorde salvo no 'acc'.
const maiorPontuacao = pontuacoesTreino.reduce((acc, valorAtual) => valorAtual > acc ? valorAtual : acc, 0);

// Exibe a maior pontuação encontrada no console
console.log("A maior pontuação do seu treino foi: " + maiorPontuacao);