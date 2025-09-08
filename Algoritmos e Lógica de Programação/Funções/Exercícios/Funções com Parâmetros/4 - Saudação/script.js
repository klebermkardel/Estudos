// Saudação Personalizada: Crie uma função chamada saudacaoPersonalizada que receba um nome como parâmetro e imprima "Olá, [nome]!". Chame a função passando seu próprio nome.

const prompt = require('prompt-sync')();

const nomeDigitado = prompt("Digite o seu nome: ");
const nomeLimpo = nomeDigitado.trim();

const saudacaoPersonalizada = (nome) => {
    console.log(`Olá, ${nome}!`);
}

saudacaoPersonalizada(nomeLimpo);