// Validação de Entrada: Peça ao usuário para digitar uma senha. Continue pedindo a senha com um laço while até que ele digite a senha correta ("1234").

const prompt = require('prompt-sync')();

let senha;

senha = prompt("Digite uma senha: ")

while(senha !== "1234") {
    console.log("Senha incorreta!");
    senha = prompt("Digite novamente: ");
}

console.log("Parabéns! Senha correta.");
