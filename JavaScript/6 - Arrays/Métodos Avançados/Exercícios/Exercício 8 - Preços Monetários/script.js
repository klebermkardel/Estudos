/* 

Exercício 8: Formatação de Preços Monetários (.map())

Contexto: Você está criando um sistema de compras e precisa formatar um array de números brutos para exibição visual na tela com o símbolo de "R$".

O Desafio:

1. Crie o array const precosBrutos = [50, 120, 200].

2. Use o .map() para transformar cada número em uma string bonita. (Exemplo de retorno do map: "R$ 50,00" — Dica: use concatenação e o .toFixed(2)).

*/

const precosBrutos = [50, 120, 200]

const precosFormatados = precosBrutos.map(preco => "R$ " + preco.toFixed(2))

console.log(precosFormatados)