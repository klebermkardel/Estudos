/*

Projeto 3: O Sistema de "Modo de Vida" (Lógicos e Ternário)
Foco: Operadores &&, ||, ! e Ternário.

O Desafio: Criar uma única linha de código que decida se você terá uma "Recompensa" no fim do dia.

Requisitos:

Crie três variáveis booleanas: estudouJavascript, treinouBasquete, limpouQuintal.

Crie uma variável chamada ganhouRecompensa.

A regra é: Você ganha a recompensa se tiver estudado E treinado (ambos true) OU se tiver limpado o quintal.

Use um Operador Ternário para armazenar na variável mensagem o texto: "Pode ver um filme!" ou "Foque nas tarefas!".

*/

// Resolução:

// Declaração de variáveis

const estudouJavaScript = true
const treinouBasquete = false
const limpouQuintal = false

// Verifica se a recompensa será concedida com base no que foi feito
const ganhouRecompensa = (estudouJavaScript && treinouBasquete) || limpouQuintal ? "Sim" : "Não"

// Exibe no console mensagem de ganhou recompensao ou não
console.log("Ganhou a recompensa? " + ganhouRecompensa)