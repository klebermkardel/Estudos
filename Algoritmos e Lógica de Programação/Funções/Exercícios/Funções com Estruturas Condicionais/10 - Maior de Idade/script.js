// É Maior de Idade? Crie uma função chamada verificarIdade que receba uma idade como parâmetro. A função deve retornar true se a pessoa for maior de idade (18 anos ou mais) e false caso contrário.

const prompt = require('prompt-sync')();

const verificarIdade = (idade) => idade >= 18;

const idadeDigitada = Number(prompt("Digite a sua idade: "));

if (isNaN(idadeDigitada) || !Number.isInteger(idadeDigitada) || idadeDigitada < 0) {
    console.log("Erro: Por favor, digite uma idade válida.");
} else {
    const ehMaior = verificarIdade(idadeDigitada);
    
    const status = ehMaior ? "Sim" : "Não";

    console.log(`\nSua idade: ${idadeDigitada} anos`);
    console.log(`É maior de idade? ${status}`);
}