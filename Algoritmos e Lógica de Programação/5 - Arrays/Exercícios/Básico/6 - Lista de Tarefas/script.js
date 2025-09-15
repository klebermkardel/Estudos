// Remover do Início: Dado o array do exercício anterior, use o método .shift() para remover a primeira tarefa (a que você acabou de adicionar). Imprima a tarefa removida e o array atualizado.

const listaDeTarefas = ["Procurar emprego", "Estudar", "Lavar a louça", "Caminhar"];

const tarefaRemovida = listaDeTarefas.shift();

console.log("\n--- Gerenciador de Tarefas ---\n");

console.log(`Tarefa Concluída/Removida: ${tarefaRemovida}`);

console.log("\nTarefas restantes:");
console.log(`${listaDeTarefas.join('\n')}`);