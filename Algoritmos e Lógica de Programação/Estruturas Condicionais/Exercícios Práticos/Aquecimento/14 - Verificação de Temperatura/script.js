// Peça uma temperatura em Celsius. Se estiver abaixo de 0, exiba "Congelando". Se estiver entre 0 e 25, "Clima Agradável". Se acima de 25, "Calor".

const prompt = require('prompt-sync')();

console.log("\n--- Verificador de Temperatura ---");
const tempDigitada = prompt("Informe a temperatura em Celsius: ");
const temperatura = Number(tempDigitada);

if (isNaN(temperatura)) {
    console.log("Erro: Por favor, informe um valor numérico para a temperatura.");
} else {
    let statusClima;

    if (temperatura < 0) {
        statusClima = "Congelando 🥶";
    } else if (temperatura <= 25) {
        statusClima = "Clima Agradável 😊";
    } else { 
        statusClima = "Calor 🔥";
    }

    console.log(`Com ${temperatura}°C, o clima está: ${statusClima}`);
}