// Sugira um plano de telefonia com base no consumo de dados.

const prompt = require('prompt-sync')();
console.log("\n--- Sugestão de Plano de Telefonia ---");

const consumo = Number(prompt("Digite seu consumo de dados em GB: "));

if (isNaN(consumo) || consumo < 0) {
    console.log("Erro: Por favor, digite um valor de consumo válido.");
} else {
    let planoSugerido;

    if (consumo <= 10) {
        planoSugerido = "Plano Básico (10GB)";
    } else if (consumo <= 20) {
        planoSugerido = "Plano Intermediário (20GB)";
    } else {
        planoSugerido = "Plano Premium (Ilimitado)";
    }

    console.log(`Com um consumo de ${consumo}GB, o plano sugerido é: ${planoSugerido}.`);
}