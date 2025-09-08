/* 

Adivinhe o Número: Crie um "mini-game". Gere um número aleatório entre 1 e 10. Peça ao usuário para adivinhar o número. Use um laço while para continuar pedindo um palpite até que o usuário acerte. A cada tentativa errada, diga se o número correto é maior ou menor que o palpite.

Dica: Para gerar um número aleatório de 1 a 10, use: const numeroSecreto = Math.floor(Math.random() * 10) + 1;

*/

const prompt = require('prompt-sync')();

const numeroSecreto = Math.floor(Math.random() * 100) + 1;

let palpite;
let tentativas = 0;

while (palpite !== numeroSecreto) {
    palpite = Number(prompt("Escolha um número entre 1 e 100: "));
    tentativas++;

    if(isNaN(palpite) || !Number.isInteger(palpite) || palpite <= 0 || palpite > 100) {
    console.log("Erro: Por favor, digite um número válido inteiro entre 1 e 100: ");
    } else {
        if(palpite < numeroSecreto) {
            console.log("O número secreto é MAIOR. Tente novamente!");
        } else if (palpite > numeroSecreto) {
            console.log("O número secreto é MENOR. Tente novamente!");
        }
    }
}

console.log(`\nParabéns, você acertou! O número secreto era ${numeroSecreto}`);
console.log(`Você precisou de ${tentativas} tentativas(s).`);