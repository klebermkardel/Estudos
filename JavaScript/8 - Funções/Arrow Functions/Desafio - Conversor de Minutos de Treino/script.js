/*

Desafio: O Conversor de Minutos de Treino

Para treinar a escrita dessa nova sintaxe, vamos criar uma função que calcula quantos segundos você passou treinando basquete.

O que fazer:

Crie uma Arrow Function chamada converterMinutosEmSegundos.

Ela deve receber apenas um parâmetro: minutos.

Use a sintaxe de linha única (sem chaves {} e sem a palavra return) para fazer o cálculo (Dica: $minutos \times 60$).

Fora da função, chame ela passando o argumento 30 (simulando 30 minutos de treino) e guarde o resultado em uma constante chamada totalSegundos.

Dê um console.log mostrando o resultado.

*/

// Declara uma Arrow Function com retorno implícito e omissão de parênteses (apenas 1 parâmetro)
const converterMinutosEmSegundos = minutos => minutos * 60;

// Define a variável de controle para o tempo de treino
const minutosDeTreino = 30;

// Invoca a Arrow Function passando a constante como argumento e armazena o resultado numérico
const totalSegundos = converterMinutosEmSegundos(minutosDeTreino);

// Exibe o relatório formatado no console unindo os dados do treino
console.log(minutosDeTreino + " minutos de treino são " + totalSegundos + " segundos");