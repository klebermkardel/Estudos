// Meu Livro Favorito: Crie um objeto chamado livro que represente um de seus livros favoritos. Ele deve ter as propriedades titulo (string), autor (string), anoPublicacao (number) e genero (string). Imprima no console cada uma das propriedades.

// 1. CRIAÇÃO DO OBJETO
// Criamos um objeto 'livro' com quatro propriedades (chaves) e seus respectivos valores.
const livro = {
    titulo: "Harry Potter e a Pedra Filosofal",
    autor: "J. K. Rowling",
    anoPublicacao: 1997,
    genero: "Ficção"
};

// Exibe um título para a saída.
console.log("\n--- Meu Livro Favorito ---\n");

// --- 2. LAÇO 'FOR...IN' PARA PERCORRER O OBJETO ---
// O laço 'for...in' é projetado especificamente para iterar sobre as chaves de um objeto.
for (const chave in livro) {
    // A cada repetição, a constante 'chave' recebe o NOME da propriedade atual.
    // 1ª volta: chave = "titulo"
    // 2ª volta: chave = "autor"
    // ...e assim por diante.

    // Para acessar o VALOR da propriedade, usamos a notação de colchetes: livro[chave].
    // É necessário usar colchetes aqui porque o nome da chave está dentro de uma variável.
    // A notação de ponto (livro.chave) não funcionaria, pois tentaria acessar uma propriedade chamada "chave".
    console.log(`${chave}: ${livro[chave]}`);
}