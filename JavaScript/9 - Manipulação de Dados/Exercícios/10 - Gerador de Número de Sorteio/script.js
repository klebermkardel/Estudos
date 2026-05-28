/*

Gerador de Número de Sorteio: 

Para um sorteio de ingressos de um jogo de basquete, crie uma linha de código usando Math.random() e Math.floor() que gere um número inteiro aleatório entre 1 e 10.

*/

// Math.random() * 10 gera decimais entre 0 e 9.999...
// Math.floor() arredonda para baixo, limitando entre 0 e 9.
// O "+ 1" desloca a faixa para frente, resultando em números de 1 a 10.
const numeroAleatorio = Math.floor(Math.random() * 10) + 1;

// Exibe o número sorteado para o ingresso do jogo de basquete
console.log(`Número sorteado: ${numeroAleatorio}`);