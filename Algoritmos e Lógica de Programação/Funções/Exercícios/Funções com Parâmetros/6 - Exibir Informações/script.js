// Exibir Informações: Crie uma função chamada mostrarInfo que receba três parâmetros: nome, idade e cidade. A função deve imprimir a frase: "Olá, meu nome é [nome], tenho [idade] anos e moro em [cidade]."

const prompt = require('prompt-sync')();

const mostrarInfo = (nome, idade, cidade) => {
    console.log(`Olá, meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}`)
};

const nomeDigitado = prompt("Digite o seu nome: ");
const nomeLimpo = nomeDigitado.trim();

const idade = Number(prompt("Digite a sua idade: "));

const cidadeDigitada = prompt("Digite a sua cidade: ");
const cidadeLimpa = cidadeDigitada.trim();

if(isNaN(idade) || !Number.isInteger(idade) || idade <= 0 || !nomeLimpo || !cidadeLimpa) {
    console.log("Erro: Por favor, informe uma idade válida.");
} else {
    mostrarInfo(nomeLimpo, idade, cidadeLimpa);
}