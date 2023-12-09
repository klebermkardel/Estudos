/* 1) Escreva um programa que mostre na tela a mensagem "Olá, Mundo!" */

const msg = "Olá, mundo!";
const response = document.getElementById("msg");

response.innerHTML = msg;

setTimeout(() => {
    response.style.transform = "translate(-50%, -50%) scale(1)";
}, 1000); // 500 milissegundos (0,5 segundos)