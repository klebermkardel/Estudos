/*

Crie uma função anônima que receba um nome como parâmetro e exiba uma saudação personalizada.

*/

// Função anônima atribuída a uma constante chamada 'saudacao'
// Essa função recebe um parâmetro 'nome' e retorna uma mensagem personalizada
const saudacao = function(nome) {
    return `Prazer, meu nome é ${nome}!`;
}

// Chamando a função e imprimindo o resultado no console
console.log(saudacao("Kleber")); // Saída: Prazer, meu nome é Kleber!

