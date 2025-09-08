// Crie um programa que declare duas variáveis numéricas e exiba a soma, subtração, multiplicação, divisão e o resto da divisão entre elas.

const prompt = require('prompt-sync')();

const numero1 = parseInt(prompt("Digite o primeiro número: "));
const numero2 = parseInt(prompt("Digite o segundo número: "));

const soma = numero1 + numero2;
const subtracao = numero1 - numero2;
const multiplicacao = numero1 * numero2;
const divisao = numero1 / numero2;
const restoDaDivisao = numero1 % numero2;

console.log("");

console.log(`A soma entre os números ${numero1} e ${numero2} é ${soma} \n`);
console.log(`A subtração entre os números ${numero1} e ${numero2} é ${subtracao} \n`);
console.log(`A multiplicacão entre os números ${numero1} e ${numero2} é ${multiplicacao} \n`);
console.log(`A divisão entre os números ${numero1} e ${numero2} é ${divisao} \n`);
console.log(`O resto da divisão entre os números ${numero1} e ${numero2} é ${restoDaDivisao} \n`);
