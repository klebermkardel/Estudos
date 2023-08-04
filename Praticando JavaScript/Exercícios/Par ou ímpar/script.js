// Praticando JavaScript - Execício 3: Par ou Ímpar

// Crie uma função que receba um número como argumento e retorne "par" se o número for par e "ímpar" se for ímpar.

function verificarParOuImpar(num) {
    if(num % 2 === 0) {
        console.log(`O número ${num} é par!`);
    } else {
        console.log(`O número ${num} é impar!`);
    }
}

verificarParOuImpar(6);
verificarParOuImpar(5);