let opJogador = parseInt(prompt("Escolha:\npedra [1]\npapel [2]\ntesoura [3]"));
let jogador = "";

if (opJogador === 1) {
    jogador = "pedra";
} else if (opJogador === 2) {
    jogador = "papel";
} else if (opJogador === 3) {
    jogador = "tesoura";
} else {
    alert(`Jogada inválida! Escolha uma opção entre 1 e 3`);
    opJogador = parseInt(prompt("Escolha:\npedra [1]\npapel [2]\ntesoura [3]"));
}

const numAleatorio = Math.floor(Math.random() * 3) + 1;
let computador = "";

if (numAleatorio === 1) {
    computador = "pedra";
} else if (numAleatorio === 2) {
    computador = "papel";
} else {
    computador = "tesoura";
}

alert(`Jogador escolheu: ${jogador}\nComputador escolheu: ${computador}`);

if (jogador === computador) {
    alert(`Empate!`);
} else if ((jogador === "pedra" && computador === "tesoura") || (jogador === "papel" && computador === "pedra") || (jogador === "tesoura" && computador === "papel")) {
    alert(`Jogador venceu!`);
} else {
    alert(`Computador venceu!`);
}
