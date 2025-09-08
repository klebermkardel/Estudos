const prompt = require('prompt-sync')();

let numeroMagico = 7;
let palpite = 0;

// Enquanto o palpite for diferente do número mágico...
while (palpite !== numeroMagico) {
    palpite = Number(prompt("Adivinhe o número mágico (1-10): "));

    if(palpite !== numeroMagico) {
        console.log("Errado! Tente novamente.");
    }
}

console.log("Parabéns! Você acertou!");