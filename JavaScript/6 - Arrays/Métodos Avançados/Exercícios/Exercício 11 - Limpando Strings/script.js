/*

Exercício 11: Limpando Strings com Espaço (.map())

Contexto: Às vezes, o usuário digita dados no formulário de emprego com espaços invisíveis no começo ou no fim. O JavaScript tem um método de string chamado .trim() que remove esses espaços.

O Desafio:

1. Crie o array const entradasBaguncadas = ["  vaga@google.com ", " dev_junior  ", "  sao paulo "].

2. Use o .map() combinado com uma arrow function para rodar o .trim() em cada item (Ex: item.trim()).

3. Imprima o novo array limpo no console.

*/

// Inicializa o array com strings contendo espaços em branco incorretos nas extremidades
const entradasBaguncadas = ["  vaga@google.com ", "dev_junior  ", " sao paulo "];

// MAP: Percorre a lista e gera um novo array aplicando o método .trim() em cada elemento,
// removendo os espaços extras do início e do fim de cada string
const entradasFormatadas = entradasBaguncadas.map(entrada => entrada.trim());

// Exibe o array final com os dados tratados e higienizados
console.log(entradasFormatadas);