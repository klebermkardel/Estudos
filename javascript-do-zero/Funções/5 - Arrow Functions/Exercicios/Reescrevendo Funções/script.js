/*

Transforme as funções abaixo em Arrow Functions

1 - function dobro(x) {
    return x * 2
}

2 - function mensagem(nome) {
    return `Bom dia, ${nome`}
}

*/

// Função 1 — Arrow function que recebe um número e retorna o dobro
const dobro = (x) => x * 2;
console.log(dobro(2)); // Saída: 4

// Função 2 — Arrow function que recebe um nome e retorna uma saudação personalizada
const mensagem = (nome) => `Olá, ${nome}!`;
console.log(mensagem("Kleber")); // Saída: Olá, Kleber!
