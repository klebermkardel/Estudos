/*

Simulador de Placar: 

No basquete americano, a média de pontos de um time comercial foi de 89.4. Use um método do objeto Math para arredondar esse número para o inteiro mais próximo.

*/

// Inicializa a média decimal de pontos obtida pelo time
const mediaDePontos = 89.4;

// Math.round(): Arredonda de forma tradicional para o número inteiro mais próximo
const pontuacaoArredonda = Math.round(mediaDePontos);

// Exibe a pontuação final tratada no terminal
console.log(`A pontuação média do time foi de ${pontuacaoArredonda} pontos`);