/*

Exercício 5: O Desafio do Encadeamento Profissional (Method Chaining)

Contexto: Este junta tudo. Você tem uma lista de lances de um treino. Você quer filtrar os erros (remover os zeros), converter os acertos multiplicando-os por 10 (simulando uma pontuação de videogame) e, no final, somar tudo para dar o Score Final do jogador. Tudo em uma única esteira de código, sem criar variáveis no meio.

O Desafio:

1. Crie o array const lancesBrutos = [2, 0, 3, 0, 2].

2. Crie uma constante chamada scoreFinal.

3. Faça a mágica conectando direto: lancesBrutos.filter(...).map(...).reduce(...).

    - .filter(): Mantém apenas números maiores que zero.

    - .map(): Multiplica cada número por 10.

    - .reduce(): Soma todos os valores começando de 0.

4. Dê um console.log("Seu Score Final no jogo foi: " + scoreFinal).

*/

// Array inicial com os dados brutos colhidos do sistema de lances
const lancesBrutos = [2, 0, 3, 0, 2];

// METHOD CHAINING: Conecta múltiplos métodos em sequência (Filtragem -> Transformação -> Redução)
const scoreFinal = lancesBrutos
    .filter(ponto => ponto > 0) // 1. Mantém apenas os acertos na lista
    .map(ponto => ponto * 10) // 2. Multiplica os acertos pelo multiplicador de pontos
    .reduce((acc, valorAtual) => acc + valorAtual, 0); // 3. Consolida a soma de todos os valores transformados

// Exibe o placar final calculado pela esteira de métodos
console.log("Seu Score Final no jogo foi: " + scoreFinal);