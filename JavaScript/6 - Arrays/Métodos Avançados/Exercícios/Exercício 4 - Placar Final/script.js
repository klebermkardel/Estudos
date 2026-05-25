/*

Exercício 4: O Placar Final Sem for (Arrow Function + .reduce())

Contexto: Lembra do projeto do Dashboard onde usamos o for para somar os pontos? Agora você vai fazer a mesma soma do placar total do dia, mas usando o acumulador supremo.

O Desafio:

1. Crie o array const pontosDoDia = [2, 3, 2, 0, 3, 2].

2. Use o método .reduce() para somar todos os elementos da lista.

3. Lembre-se de passar os parâmetros (acc, valorAtual) e definir o valor inicial do acumulador como 0.

4. Guarde o resultado em uma constante placarFinal e exiba no console.

*/

// Inicializa o array com o histórico de pontuações coletadas no dia
const pontosDoDia = [2, 3, 2, 0, 3, 2];

// REDUCE: Reduz a lista de números a um único valor somatório. 
// O 'acc' (acumulador) recebe a soma progressiva e o '0' define seu valor de largada.
const placarFinal = pontosDoDia.reduce((acc, valorAtual) => acc + valorAtual, 0);

// Exibe o placar consolidado final no terminal
console.log("Total de pontos: " + placarFinal);