// Criador de E-mail: Crie uma função chamada criarEmail que receba um nomeCompleto como parâmetro. A função deve gerar um e-mail no formato nome_completo@meudominio.com (tudo em minúsculo e substituindo espaços por _) e retornar esse e-mail.

const prompt = require('prompt-sync')();

const criarEmail = (nomeCompleto) => nomeCompleto.toLowerCase().replace(/ /g, '_') + "@meudominio.com";

const nomeDigitado = prompt("Digite o seu nome completo: ");
const nomeLimpo = nomeDigitado.trim();

if(!nomeLimpo) {
    console.log("Erro: Por favor, digite o seu nome completo.");
} else {
    console.log(`E-mail gerado: ${criarEmail(nomeLimpo)}`);
}