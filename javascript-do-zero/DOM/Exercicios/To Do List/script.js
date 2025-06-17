// 1. Seleciona os elementos do DOM que vamos manipular
const inputTarefa = document.getElementById("nova-tarefa");
const botaoAdicionar = document.getElementById("adicionar");
const listaTarefas = document.getElementById("lista-tarefas");

// 2. Função que será executada ao clicar no botão "Adicionar"
function adicionarTarefa() {
  // Verifica se o campo está vazio
  if (inputTarefa.value.trim() === "") {
    alert("Digite uma tarefa!");
    return;
  }

  // 3. Cria o elemento <li> que vai conter a tarefa
  const novaLi = document.createElement("li");

  // 4. Cria um <span> para exibir o texto da tarefa (facilita edição)
  const spanTexto = document.createElement("span");
  spanTexto.textContent = inputTarefa.value;

  // 5. Cria botão "Editar"
  const botaoEditar = document.createElement("button");
  botaoEditar.textContent = "Editar";
  botaoEditar.addEventListener("click", function () {
    const novoTexto = prompt("Editar tarefa:", spanTexto.textContent);
    if (novoTexto !== null && novoTexto.trim() !== "") {
      spanTexto.textContent = novoTexto;
    }
  });

  // 6. Cria botão "Remover"
  const botaoRemover = document.createElement("button");
  botaoRemover.textContent = "Remover";
  botaoRemover.addEventListener("click", function () {
    novaLi.remove(); // Remove o <li> inteiro da lista
  });

  // 7. Adiciona evento para riscar a tarefa ao clicar no texto
  spanTexto.addEventListener("click", function () {
    spanTexto.classList.toggle("completa"); // Adiciona/Remove a classe CSS
  });

  // 8. Monta o <li>: adiciona o texto e os botões
  novaLi.appendChild(spanTexto);
  novaLi.appendChild(botaoEditar);
  novaLi.appendChild(botaoRemover);

  // 9. Adiciona o <li> na <ul>
  listaTarefas.appendChild(novaLi);

  // 10. Limpa o campo de input
  inputTarefa.value = "";
  inputTarefa.focus();
}

// 11. Adiciona o evento de clique ao botão "Adicionar"
botaoAdicionar.addEventListener("click", adicionarTarefa);
