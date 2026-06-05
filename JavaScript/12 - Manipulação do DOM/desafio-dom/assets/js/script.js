// Exercício de Fixação: Todo List Componentizado no DOM
const titulo = document.querySelector("#titulo");
const btnAdicionarTarefa = document.querySelector(".btn-adicionar");
const inputTarefa = document.querySelector(".campo-tarefa"); 
const listaTarefas = document.querySelector(".lista-tarefas");

const adicionarTarefa = () => {
    const tarefa = inputTarefa.value;

    // Instancia os nós de elementos na memória
    const novaTarefa = document.createElement("li");
    const btnRemoverTarefa = document.createElement("button");

    // Configura as propriedades de cada nó isoladamente
    novaTarefa.innerText = tarefa;
    btnRemoverTarefa.setAttribute('class', 'btn-remover');
    btnRemoverTarefa.textContent = "Excluir";

    // Acopla o ouvinte de destruição de escopo na li corrente
    btnRemoverTarefa.addEventListener('click', () => {
        novaTarefa.remove(); // Remove o bloco de forma atômica
    });
    
    // Montagem da árvore de nós (Injeção em cascata)
    novaTarefa.appendChild(btnRemoverTarefa); // Botão entra na LI
    listaTarefas.appendChild(novaTarefa);     // LI entra na UL

    // Reseta o estado do input
    inputTarefa.value = "";
};

btnAdicionarTarefa.addEventListener("click", adicionarTarefa);