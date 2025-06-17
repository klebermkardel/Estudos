// Seleciona o elemento com id "titulo"
const titulo = document.getElementById("titulo");

// Seleciona todos os elementos que possuem a classe "mensagem"
// Retorna uma NodeList (semelhante a um array)
const mensagens = document.querySelectorAll(".mensagem");

// Seleciona o botão com id "botao"
const botao = document.querySelector("#botao");

// Exibe no console o conteúdo de texto do elemento <h1>
console.log(titulo.textContent); // Mostra: Título da Página

// Faz um loop por todos os parágrafos com a classe "mensagem"
mensagens.forEach((m, i) => {
    // Mostra o índice + 1 e o conteúdo de texto de cada parágrafo
    console.log(`Mensagem ${i + 1}: ${m.textContent}`);
});

// Exibe o texto do botão
console.log(botao.textContent); // Mostra: Clique aqui
