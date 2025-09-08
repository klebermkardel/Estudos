// Positivo, Negativo ou Zero: Peça um número e verifique se ele é positivo, negativo ou zero.

const prompt = require('prompt-sync')();

const numero = Number(prompt("Informe um número inteiro: "));

console.log("");

if(isNaN(numero) || !Number.isInteger(numero) ) {
    console.log("Erro: Por favor, informe um número inteiro válido!");
} else {
    if(numero > 0) {
    console.log(`O número ${numero} é positivo`);
    } else if(numero === 0) {
        console.log(`O número é zero!`);
    } else {
        console.log(`O número ${numero} é negativo!`)
    }
}
