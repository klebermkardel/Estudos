// Meu Livro Favorito: Crie um objeto chamado livro que represente um de seus livros favoritos. Ele deve ter as propriedades titulo (string), autor (string), anoPublicacao (number) e genero (string). Imprima no console cada uma das propriedades.

const livro = {
    titulo: "Harry Potter e a Pedra Filosofal",
    autor: "J. K. Rowling",
    anoPublicacao: 1997,
    genero: "Ficção"
}

console.log("\n--- Meu Livro Favorito ---\n");

for (const chave in livro) {
    console.log(`${chave}: ${livro[chave]}`);
}