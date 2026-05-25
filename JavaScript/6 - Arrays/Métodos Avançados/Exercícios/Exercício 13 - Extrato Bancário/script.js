/*

Exercício 13: Encadeamento - O Extrato da Conta (.filter() + .reduce())

Contexto: Você tem um array que mistura entradas (números positivos) e saídas/gastos (números negativos) da sua conta corrente. Você quer calcular o total apenas do que você gastou.

O Desafio:

1. Crie o array const movimentacoes = [1500, -50, -200, 300, -120].

2. Crie uma constante totalGasto usando encadeamento.

3. Primeiro, use o .filter() para manter apenas os números menores que zero (< 0).

4. Logo em seguida, conecte o .reduce() para somar esses gastos negativos. O resultado final deve ser -370.

*/

// Array que simula o extrato bancário do dia, misturando créditos (positivos) e débitos (negativos)
const movimentacoes = [1500, -50, -200, 300, -120];

// METHOD CHAINING: Isola as despesas e calcula o montante total de saídas da conta
const totalGasto = movimentacoes
    .filter(movimentacao => movimentacao < 0)         // 1. Retém na esteira apenas os valores negativos (gastos)
    .reduce((acc, valorAtual) => acc + valorAtual, 0); // 2. Soma todas as despesas filtradas partindo do zero

// Exibe o extrato consolidado formatando o valor para duas casas decimais e valor formatado para valor absoluto com Math.abs
console.log("Valor total gasto hoje: R$ " + Math.abs(totalGasto).toFixed(2));
