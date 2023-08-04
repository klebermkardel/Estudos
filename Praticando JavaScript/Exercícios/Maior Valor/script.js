// Praticando JavaScript - Execício 4: Maior Valor

// Escreva uma função que receba uma lista de números como argumento e retorne o maior valor dessa lista.

function encontrarMaiorValor(listaNumeros) {
    let maiorValor = listaNumeros[0];

    for(i = 0; i < listaNumeros.length; i++) {
        if(listaNumeros[i] > maiorValor) {
            maiorValor = listaNumeros[i];
        }
    }

    console.log(`Maior valor: ${maiorValor}`);
}

const lista = [10, 5, 25, 8, 15]

encontrarMaiorValor(lista)