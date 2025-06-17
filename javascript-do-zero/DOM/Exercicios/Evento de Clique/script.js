// Seleciona o elemento com id "titulo"
const titulo = document.getElementById("titulo");

// Seleciona todos os elementos com a classe "mensagem"
const mensagens = document.querySelectorAll(".mensagem");

// Seleciona o botão com id "botao"
const botao = document.querySelector("#botao");

// Novas mensagens que serão exibidas
const novasMensagens = [
    "Mensagem 1: JavaScript é divertido!",
    "Mensagem 2: DOM facilita a manipulação da página!",
    "Mensagem 3: Continue praticando!"
]

// Atualiza título e mensagens ao clicar no botão
botao.addEventListener("click", () => {
    titulo.textContent = "Mensagens atualizadas!";

    mensagens.forEach((el, i) => el.textContent = novasMensagens[i]);
});