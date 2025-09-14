// Acesso Dinâmico: Crie um objeto carro com as propriedades marca, modelo e ano. Peça ao usuário para digitar o nome de uma propriedade ("marca", "modelo" ou "ano"). Use a notação de colchetes (objeto[chave]) para acessar e imprimir o valor da propriedade que o usuário escolheu.

const prompt = require('prompt-sync')();

const carro = {
    marca: "Mercedes-Benz",
    modelo: "AMG Classe C Sedan",
    ano: 2024
};

console.log("\n--- Informações do Carro ---\n");
console.log("Propriedades disponíveis: marca, modelo, ano");

const chaveDesejada = prompt("Qual propriedade você gostaria de ver? ").trim().toLowerCase();

if(chaveDesejada in carro) {
    console.log(`\nO valor de "${chaveDesejada}" é: ${carro[chaveDesejada]}`);
} else {
    console.log(`\nErro: A propriedade "${chaveDesejada}" não existe neste objeto.`);
}