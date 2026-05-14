/*

Prática no Console:

Vamos unir o que você aprendeu sobre basquete e estudos hoje:

*/

const estudouJS = true
const jogouBasquete = true
const limpouQuintal = false

// Exemplo 1: Dia Produtivo (Precisa ter feito os dois principais)
const diaProdutivo = estudouJS && jogouBasquete
console.log("O dia foi produtivo?", diaProdutivo) // true

// Exemplo 2: Alguma tarefa feita (Fez pelo menos uma das três)
const fezAlgo = estudouJS || jogouBasquete || limpouQuintal
console.log("Fez pelo menos uma tarefa?", fezAlgo) // true

// Exemplo 3: Validação de pendência
const aindaTemTarefa = !limpouQuintal
console.log("Ainda tem tarefas pendentes?", aindaTemTarefa) // true