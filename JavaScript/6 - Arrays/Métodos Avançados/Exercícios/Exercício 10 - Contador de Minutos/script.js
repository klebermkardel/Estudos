/* 

Contador de Minutos Totais de Estudo (.reduce())

Contexto: Você anotou em um array quantos minutos estudou JavaScript em cada dia da semana e quer saber a carga horária total.

O Desafio:

Crie o array const minutosEstudados = [45, 60, 30, 90, 45].

Use o .reduce() para somar todos os minutos do array.

Exiba o total no console.

*/

// Inicializa o array com os minutos dedicados aos estudos ao longo da semana
const minutosEstudados = [45, 60, 30, 90, 45];

// REDUCE: Soma todos os minutos da lista. O 'acc' começa em 0 e acumula o tempo de cada dia.
const minutosTotais = minutosEstudados.reduce((acc, valorAtual) => acc + valorAtual, 0);

// Exibe o total de minutos acumulados no terminal
console.log("Total de minutos estudados: " + minutosTotais + " minutos.");