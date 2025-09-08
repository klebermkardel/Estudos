// Verifique a elegibilidade para um bônus com base no tempo de casa OU no valor de vendas.

const prompt = require('prompt-sync')();
console.log("\n--- Verificador de Bônus de Funcionário ---");

const tempoDeCasa = Number(prompt("Tempo de casa (anos): "));
const vendas = Number(prompt("Valor de vendas no último ano: R$ "));

if (isNaN(tempoDeCasa) || isNaN(vendas) || tempoDeCasa < 0 || vendas < 0) {
    console.log("Erro: Por favor, informe valores numéricos e positivos.");
} else {
    if (tempoDeCasa > 5 || vendas > 50000) {
        console.log("Parabéns! Você é elegível para o bônus.");
    } else {
        console.log("Infelizmente, você não atende aos critérios para o bônus este ano.");
    }
}