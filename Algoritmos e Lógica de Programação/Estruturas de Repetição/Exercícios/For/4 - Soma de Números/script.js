// Soma de Números: Escreva um programa que calcula a soma de todos os números de 1 a 100. Use um laço for e uma variável para acumular o total.

let soma = 0;

for(let i = 1; i <= 100; i++) {
    soma += i;
}

console.log(`O valor total da soma de todos números de 1 a 100 é: ${soma}`);