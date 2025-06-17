// Seleciona os elementos pelo ID
const nome = document.getElementById("nome");
const descricao = document.getElementById("descricao");
const foto = document.getElementById("foto");
const botao = document.getElementById("botao");
const perfil = document.getElementById("perfil");

// Quando clicar no botão, atualiza o conteúdo do cartão
botao.addEventListener("click", () => {
    nome.textContent = "Kleber Molina";
    descricao.textContent = "Desenvolvedor em formação, apaixonado por tecnologia";
    foto.setAttribute("src", "https://randomuser.me/api/portraits/men/75.jpg");

    // Alterna uma classe no cartão para demonstrar uso do classList
      perfil.classList.toggle("oculto"); // Oculta ou exibe o cartão
});