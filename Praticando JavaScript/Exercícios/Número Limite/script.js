// Praticando JavaScript - Execício 7: Número Limite

// Crie uma função que receba um número como argumento e retorne a sequência de números de 0 até o número informado em um array.

function sequenciaDeNumeros(num) {
    const numeros = [];

    for(i = 1; i <= num; i++) {
        numeros.push(i);
    } 

    console.log(numeros)
}

sequenciaDeNumeros(7);