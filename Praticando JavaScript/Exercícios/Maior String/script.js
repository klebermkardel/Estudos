// Praticando JavaScript - Execício 5: Maior String

// Crie uma função que receba um array de strings como argumento e retorne a string mais longa.

function encontrarMaiorString(listaStrings) {
    let maiorString = "";

    for (i = 0; i < listaStrings.length; i++) {
        if(listaStrings[i].length > maiorString.length) {
            maiorString = listaStrings[i];
        }
    }

    console.log(`String mais longa: ${maiorString}`)
}

const lista = ["O jogo", "Abublublé", "Miau", "Eu não tenho mões"];

encontrarMaiorString(lista);

