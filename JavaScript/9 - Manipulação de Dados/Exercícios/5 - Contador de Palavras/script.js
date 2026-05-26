/*

Contador de Palavras

Um campo de "Sobre mim" no portfólio só pode ter no máximo 5 palavras para um resumo rápido. Dada a string "Desenvolvedor JavaScript focado em performance", use o .split() para quebrar a frase e use a propriedade correta para exibir quantas palavras essa frase possui.

*/

// Arrow function que contabiliza o número de palavras em uma frase
const contarPalavras = (string) => {
    // Quebra a string original em um array de substrings utilizando o espaço como divisor
    const palavras = string.split(" ");

    // Obtém a quantidade total de elementos (palavras) gerados no array
    const totalDePalavras = palavras.length;

    // Retorna o relatório formatado utilizando Template String
    return `Essa string possui ${totalDePalavras} palavras`;
};

// Executa o teste exibindo a contagem no console
console.log(contarPalavras("Desenvolvedor JavaScript focado em performance"));
