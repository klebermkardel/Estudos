// É Maior de Idade? Crie uma função chamada verificarIdade que receba uma idade como parâmetro. A função deve retornar true se a pessoa for maior de idade (18 anos ou mais) e false caso contrário.

// Importa e inicializa a biblioteca para entrada de dados no console.
const prompt = require('prompt-sync')();

// Declara a função 'verificarIdade'.
// Recebe 'idade' como parâmetro e retorna 'true' se for maior ou igual a 18, senão 'false'.
const verificarIdade = (idade) => idade >= 18;

// Solicita a idade ao usuário e a converte para o tipo Number.
const idadeDigitada = Number(prompt("Digite a sua idade: "));

// Valida se a entrada é um número inteiro e não negativo.
if (isNaN(idadeDigitada) || !Number.isInteger(idadeDigitada) || idadeDigitada < 0) {
    // Exibe uma mensagem de erro se a validação falhar.
    console.log("Erro: Por favor, digite uma idade válida.");
} else {
    // Chama a função 'verificarIdade' com a idade fornecida e armazena o retorno booleano.
    const ehMaior = verificarIdade(idadeDigitada);
    
    // Converte o resultado booleano ('true'/'false') em uma string ("Sim"/"Não") para exibição.
    const status = ehMaior ? "Sim" : "Não";

    // Exibe o resultado final formatado para o usuário.
    console.log(`\nSua idade: ${idadeDigitada} anos`);
    console.log(`É maior de idade? ${status}`);
}