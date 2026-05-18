/*

Contexto: Você quer organizar sua lista de estudos por ordem de prioridade.

O Desafio:

1. Crie um array chamado materias contendo: "HTML", "CSS", "Git".

2. Você percebeu que o "JavaScript" é mais importante e deve entrar exatamente entre o "CSS" e o "Git".

3. Use o .splice() para inserir "JavaScript" no índice 2, sem remover nenhuma matéria da lista (segundo argumento deve ser 0).

4. Imprima a lista final.

*/

// Inicializa um array com a lista inicial de matérias de estudo
const materias = ["HTML", "CSS", "Git"];

// Armazena em uma constante a string da matéria que deve receber prioridade na organização
const materiaPrioridade = "JavaScript";

// Altera o array original: acessa a posição de índice 2, remove 0 elementos (nenhum) 
// e insere o valor da constante 'materiaPrioridade' ali, deslocando os itens seguintes
materias.splice(2, 0, materiaPrioridade);

// Imprime no terminal o array modificado para validar a inserção e a nova ordenação
console.log(materias);
