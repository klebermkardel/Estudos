/*

Exercício 6: Lista de Presença da Quadra (.forEach())

Contexto: Você tem uma lista com o nome dos parceiros que foram jogar basquete com você e quer anunciar a chegada de cada um.

O Desafio: 

1. Crie o array const jogadores = ["Carlos", "Marcos", "Lucas"].
2. Use o .forEach() para exibir no console: "[Nome] entrou na quadra!".

*/

// Inicializa uma lista contendo os nomes dos atletas confirmados para o treino
const jogadores = ["Carlos", "Marcos", "Lucas"];

// Executa o .forEach() para iterar sobre a lista, isolando cada nome no parâmetro 'jogador'
// e disparando a mensagem de boas-vindas diretamente no console para cada iteração
jogadores.forEach(jogador => console.log(jogador + " entrou na quadra!"));