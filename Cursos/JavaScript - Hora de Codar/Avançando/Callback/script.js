// Avançando em JavaScript

// Callback => função
function cumprimentar(nome, callback) {
    console.log(`Olá, ${nome}`);
    callback();
}

function mostrarSaudacao() {
    console.log("Como você está?");
}

cumprimentar("Kleber", mostrarSaudacao);

console.log("---------------------------");

// Mesma coisa que a de cima
cumprimentar("Camila", function () {
    console.log("Tá tudo bem?")
});

console.log("---------------------------");

// setTimeOut => depois de um tempo executa algo, uma vez
function mostrarMensagem() {
    console.log("Essa mensagem será exibida após 3 segundos")
}


// 1000ms = 1s
setTimeout(mostrarMensagem, 3000);

setTimeout(function () {
    console.log("Oi")
}, 1000)