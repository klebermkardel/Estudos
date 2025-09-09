// Adicionar ao Início: Crie um array com uma lista de tarefas a fazer. Use o método .unshift() para adicionar uma nova tarefa urgente no início da lista. Imprima o array completo.

const listaDeTarefas = ["Estudar", "Lavar a louça", "Caminhar"];

listaDeTarefas.unshift("Procurar emprego");

console.log("\n--- Lista de Tarefas ---\n");

console.log(`${listaDeTarefas.join('\n')}`);