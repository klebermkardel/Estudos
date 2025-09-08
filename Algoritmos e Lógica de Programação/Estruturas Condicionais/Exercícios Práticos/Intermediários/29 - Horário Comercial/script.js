// Verifique se uma determinada hora está dentro do horário comercial (8 às 18).

const prompt = require('prompt-sync')();
console.log("\n--- Verificador de Horário Comercial (8h-18h) ---");

const hora = Number(prompt("Digite a hora (0-23): "));

if (isNaN(hora) || !Number.isInteger(hora) || hora < 0 || hora > 23) {
    console.log("Erro: Por favor, digite uma hora válida (número inteiro de 0 a 23).");
} else {
    if (hora >= 8 && hora < 18) {
        console.log(`A hora ${hora}h ESTÁ dentro do horário comercial.`);
    } else {
        console.log(`A hora ${hora}h NÃO ESTÁ dentro do horário comercial.`);
    }
}