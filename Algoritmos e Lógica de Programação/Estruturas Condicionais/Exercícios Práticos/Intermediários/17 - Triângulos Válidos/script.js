// Triângulo Válido: Peça os comprimentos dos três lados de um triângulo. Verifique se eles podem formar um triângulo (a soma de quaisquer dois lados deve ser maior que o terceiro lado).

const prompt = require('prompt-sync')();

console.log("--- Triângulos Válidos ---");

const lado1 = Number(prompt("Informe o primeiro lado do triângulo: "));
const lado2 = Number(prompt("Informe o segundo lado do triângulo: ") );
const lado3 = Number(prompt("Informe o terceiro lado do triângulo: "));

if(isNaN(lado1) || isNaN(lado2) || isNaN(lado3) || lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
    console.log("Erro: Por favor, digite três números positivos e válidos para os lados.");
} else {
    let tipoDoTriangulo;

    if(lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
        if(lado1 === lado2 && lado2 === lado3) {
            tipoDoTriangulo = "Equilátero";
        } else if(lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
            tipoDoTriangulo = "Isósceles";
        } else {
            tipoDoTriangulo = "Escaleno";
        }

        console.log(`Os lados informados PODEM formar um triângulo e esse triângulo é ${tipoDoTriangulo}`);
    } else {
        console.log("Os lados informados NÃO PODEM formar um triângulo válido.");
    }
}