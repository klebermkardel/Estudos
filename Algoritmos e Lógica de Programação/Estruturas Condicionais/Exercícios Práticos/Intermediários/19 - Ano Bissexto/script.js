// Ano Bissexto: Peça um ano e verifique se ele é bissexto. (Um ano é bissexto se for divisível por 4, exceto para anos que são divisíveis por 100 mas não por 400).

const prompt = require('prompt-sync')();

console.log("\n--- Verificador de Ano Bissexto ---\n");

const ano = Number(prompt("Informe um ano: "));

if (isNaN(ano) || !Number.isInteger(ano) || ano <= 0) {
    console.log("Erro: Por favor, digite um número inteiro e positivo válido.");
} else {
    let ehBissexto = false; // Começamos assumindo que não é bissexto

    // 1º Nível: A regra principal (divisível por 4)
    if (ano % 4 === 0) {
        // 2º Nível: A exceção (divisível por 100)
        if (ano % 100 === 0) {
            // 3º Nível: A exceção da exceção (divisível por 400)
            if (ano % 400 === 0) {
                ehBissexto = true; // Ex: 2000
            } else {
                ehBissexto = false; // Ex: 1900
            }
        } else {
            ehBissexto = true; // Ex: 2024
        }
    } else {
        ehBissexto = false; // Ex: 2023
    }

    // Usamos o operador ternário para montar a frase final
    const situacaoAno = ehBissexto ? "é bissexto" : "não é bissexto";
    
    console.log(`O ano de ${ano} ${situacaoAno}.`);
}