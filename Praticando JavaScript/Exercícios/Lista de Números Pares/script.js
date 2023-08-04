// Praticando JavaScript - Execício 8: Lista de Números Pares

// Escreva uma função que receba um array de números como argumento e retorne um novo array contendo apenas os números pares.

function filtrarNumerosPares(listaNumeros) {
    const numerosPares = listaNumeros.filter(numero => numero % 2 === 0);
    console.log(numerosPares);
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 7, 9, 10]    

filtrarNumerosPares(numeros);
