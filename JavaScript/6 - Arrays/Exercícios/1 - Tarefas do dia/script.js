/*

Contexto: Você tem uma lista com o cronograma das próximas tarefas do dia.

O Desafio: 

1. Crie um array chamado cronograma com os itens: "Estudar JS", "Treinar Arremesso", "Ver Vagas".

2. Descobriu que o quintal está muito sujo. Adicione "Limpar o Quintal" no início da lista.

3. Você ficou sem tempo e precisou cancelar a última tarefa da lista. Remova o último item do array.

4. Exiba o array final no console.

*/

// Inicializa um array contendo strings que representam o planejamento sequencial das tarefas diárias
const cronograma = ["Estudar JS", "Me Exercitar", "Ver Vagas", "Date"];

// Define uma variável booleana de controle para sinalizar o estado de limpeza do quintal
const quintalSujo = true;

// Avalia a condição; se o quintal estiver sujo, executa a mutação no início do array
if (quintalSujo) {
    // Insere a nova tarefa no índice 0, deslocando todos os elementos existentes uma posição para a frente
    cronograma.unshift("Limpar o Quintal");
}

// Define uma variável booleana de controle para monitorar a disponibilidade de tempo do usuário
const temTempo = false;

// Usa o operador de negação (!) para avaliar se a condição é falsa (ou seja, se NÃO há tempo disponível)
if (!temTempo) {
    // Remove o último elemento atual do array ("Date"), reduzindo o tamanho total da lista em 1
    cronograma.pop();
}

// Imprime no console o estado final e atualizado do array após as checagens condicionais
console.log(cronograma);