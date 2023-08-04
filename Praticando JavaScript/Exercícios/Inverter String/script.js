// Praticando JavaScript - Execício 10: Inverter String

// Crie uma função que receba uma string como argumento e retorne a mesma string invertida

function inverterString(string) {
  console.log(string.split("").reverse().join(""));
}

const texto = "Olá, mundo!";

inverterString(texto)