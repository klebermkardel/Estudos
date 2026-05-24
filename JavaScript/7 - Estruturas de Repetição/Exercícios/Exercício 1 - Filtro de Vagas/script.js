/*

O Filtro de Vagas (for + if)

Contexto: Você tem uma lista de vagas, mas quer identificar no console apenas as vagas da empresa onde você mais quer trabalhar: o Google.

O Desafio: 

1. Crie um array listaVagas = ["Apple", "Google", "Microsoft", "Google", "Facebook"].
2. Use um laço for para percorrer todo o array.
3. Dentro do loop, use um if para checar se a vaga atual é igual a "Google".
4. Se for igual, exiba no console: "Vaga do Google encontrada no índice [X]!" (substitua o X pelo número do índice atual).

*/

// Inicializa um array contendo strings com nomes de empresas (incluindo duplicatas)
const listaVagas = ["Apple", "Google", "Microsoft", "Google", "Facebook"];

// Configura o laço para percorrer o array do índice 0 até a última posição válida (menor que o tamanho da lista)
for (let i = 0; i < listaVagas.length; i++) {
    // Avalia se o elemento da posição atual do loop é exatamente igual à string "Google"
    if (listaVagas[i] === "Google") {
        // Exibe no console o índice numérico onde a condição foi atendida
        console.log("Vaga do Google encontrada no índice " + i);
    }
}
