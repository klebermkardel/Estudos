/* Exercício: Lista de Compras Interativa

Você foi desafiado a criar um programa em JavaScript para gerenciar uma lista de compras. O programa deve permitir ao usuário adicionar itens à lista, agrupando-os por categorias, como frutas, laticínios, congelados e doces. Além disso, o programa deve oferecer a opção de remover itens da lista.

A interação com o programa deve seguir o seguinte fluxo:

O programa exibe a pergunta "Deseja adicionar uma comida na lista de compras ou remover um item?" e oferece as opções "adicionar", "remover" ou "não".

- Se o usuário escolher "adicionar", o programa solicita o nome do item e a categoria em que ele se encaixa. O item é adicionado à lista de compras na categoria correspondente.
- Se o usuário escolher "remover" e a lista de compras não estiver vazia, o programa exibe a lista atual de compras e solicita o item a ser removido. Caso o item seja encontrado na lista, ele é removido e uma mensagem de confirmação é exibida. Caso contrário, uma mensagem informando que o item não foi encontrado é exibida.
- Se o usuário escolher "não", o programa exibe a lista de compras final e encerra a execução.

Observações:

- O programa deve garantir que a categoria informada ao adicionar um item seja válida, exibindo uma mensagem de erro em caso contrário.
- A opção de remover um item só deve estar disponível se a lista de compras não estiver vazia. Caso contrário, uma mensagem informando que a lista está vazia e que não é possível remover itens deve ser exibida.
- O programa deve utilizar a função alert para exibir as mensagens e interagir com o usuário.
- Utilize os métodos adequados do JavaScript, como hasOwnProperty, indexOf e splice, para realizar as operações de adicionar e remover itens da lista.

Seu desafio é implementar o programa seguindo as especificações acima e testá-lo para garantir seu correto funcionamento. */


// Criação do objeto para armazenar as categorias
const listaDeCompras = {
  Frutas: [],
  Laticínios: [],
  Congelados: [],
  Doces: []
};

// Função para adicionar um item à lista de compras
function adicionarItem(nomeItem, categoria) {
  // Verifica se a categoria existe na lista
  if (listaDeCompras.hasOwnProperty(categoria)) {
    listaDeCompras[categoria].push(nomeItem); // Adiciona o item à categoria correspondente
  } else {
    alert("Categoria inválida!");
  }
}

// Função para remover um item da lista de compras
function removerItem(nomeItem) {
  let itemRemovido = false;
  for (const categoria in listaDeCompras) {
    const listaCategoria = listaDeCompras[categoria];
    const index = listaCategoria.indexOf(nomeItem);
    if (index !== -1) {
      listaCategoria.splice(index, 1); // Remove o item da lista
      itemRemovido = true;
      break;
    }
  }
  if (itemRemovido) {
    alert(`O item '${nomeItem}' foi removido da lista de compras.`);
  } else {
    alert("Não foi possível encontrar o item dentro da lista!");
  }
}

// Função para exibir a lista de compras
function exibirListaDeCompras() {
  let listaFormatada = "Lista de compras:\n";
  for (const categoria in listaDeCompras) {
    listaFormatada += `    ${categoria}: ${listaDeCompras[categoria].join(", ")}\n`;
  }
  alert(listaFormatada);
}

// Função principal que interage com o usuário
function programaListaDeCompras() {
  let adicionarMais = true;
  while (adicionarMais) {
    const resposta = prompt("Deseja adicionar uma comida na lista de compras ou remover um item? (adicionar/remover/não)");

    if (resposta.toLowerCase() === "adicionar") {
      const nomeComida = prompt("Qual comida você deseja inserir?");
      const categoriaComida = prompt("Em qual categoria essa comida se encaixa?");
      adicionarItem(nomeComida, categoriaComida);
    } else if (resposta.toLowerCase() === "remover") {
      const isEmpty = Object.values(listaDeCompras).every((categoria) => categoria.length === 0);
      if (isEmpty) {
        alert("A lista de compras está vazia. Não é possível remover itens.");
      } else {
        exibirListaDeCompras();
        const itemRemover = prompt("Qual item você deseja remover?");
        removerItem(itemRemover);
      }
    } else if (resposta.toLowerCase() === "não") {
      adicionarMais = false;
      exibirListaDeCompras();
    } else {
      alert("Resposta inválida! Por favor, responda com 'adicionar', 'remover' ou 'não'.");
    }
  }
}

// Executa o programa
programaListaDeCompras();
