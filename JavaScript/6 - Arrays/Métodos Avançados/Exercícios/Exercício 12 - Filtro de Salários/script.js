/*

Exercício 12: Peneira de Salários Altos (.filter())

Contexto: Você quer filtrar uma lista de salários do mercado de tecnologia para analisar apenas aqueles que pagam acima de R$ 4.500,00.

O Desafio:

Crie o array const salariosMercado = [3200, 4800, 6000, 2900, 5100].

Use o .filter() para capturar apenas os salários maiores que 4500.

*/

// Inicializa o array com a amostragem de salários coletados para a pesquisa de mercado
const salariosMercado = [3200, 4800, 6000, 2900, 5100];

// FILTER: Varre a lista e gera um novo array mantendo apenas os valores maiores ou iguais a 4500
const salariosFiltrados = salariosMercado.filter(salario => salario >= 4500);

// Exibe a lista refinada no console
console.log(salariosFiltrados);