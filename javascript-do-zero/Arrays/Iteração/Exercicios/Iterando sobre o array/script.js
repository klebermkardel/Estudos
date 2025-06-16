/*

1. Use um laço for para exibir todos os nomes da lista nomes

2. Depois, use um forEach para fazer a mesma coisa com outro formato de frase, como "Pessoa X: Y"

*/

const nomes = ["João", "Maria", "José", "Ana", "Gustavo"]

// For
for(i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}

// forEach
nomes.forEach((nome, index) => {
    console.log(`Pessoa ${index + 1}: ${nome}`)
})