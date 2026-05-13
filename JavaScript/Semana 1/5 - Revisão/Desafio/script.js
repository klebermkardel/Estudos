/*

Para fechar a semana com chave de outro no seu console, tente escrever um único bloco de código que resuma tudo o que foi aprendido até aqui.

O desafio

Crie um script que:

1. Tenha uma const com seu nome.
2. Tenha uma let com quantas horas você estudou hoje
3. Tenha uma const que armazene um Booleano verificando se você estou mais de 2 horas.
4. Exiba uma frase no console juntando tudo isso.
5. Use o typeof em uma dessas variaveis e exiba o tipo no final.

*/

const nome = "Kleber"
const metaEstudosHoras = 2
let horasEstudadas = 1
const metaAtinginda = horasEstudadas >= metaEstudosHoras

console.log("Olá, meu nome é " + nome + "! Hoje minha meta é estudar por " + metaEstudosHoras + "h, mas até o momento estudei por apenas " + horasEstudadas +  "h. Minha meta foi atingida? " + metaAtinginda + " " + typeof(metaAtinginda))