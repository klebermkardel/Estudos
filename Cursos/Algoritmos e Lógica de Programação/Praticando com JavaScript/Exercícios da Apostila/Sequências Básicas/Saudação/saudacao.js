/* 2) Faça um programa que leia o nome de uma pessoa e mostre uma mensagem de boasvindas para ela:
Ex:
Qual é o seu nome? João da Silva
Olá João da Silva, é um prazer te conhecer! */

// Adicione este trecho ao seu script JavaScript (saudacao.js)
document.getElementById("nameInput").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Evita que a tecla "Enter" envie o formulário (comportamento padrão)
        getData();
    }
});

document.getElementById("salInput").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Evita que a tecla "Enter" envie o formulário (comportamento padrão)
        getData();
    }
});

function getData() {
    let nameInputValue = document.getElementById("nameInput").value;
    const response = document.getElementById("msg");

    if(nameInputValue === "") {
        response.innerHTML = `Por favor, insira o seu nome!`;
        response.style.color = "red"
    } else {
        response.innerHTML = `Olá ${nameInputValue}, é um prazer te conhecer!`;
        response.style.color = ""
    }
    
    
    // Adicionando a lógica de exibição do box-response
    response.style.transform = "translate(-50%, -50%) scale(1)";

    nameInput.value = ""
}
