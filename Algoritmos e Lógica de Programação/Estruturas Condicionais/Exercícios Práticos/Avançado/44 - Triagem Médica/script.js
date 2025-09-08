// Classifique a urgência de um paciente com base na temperatura e pressão.

// Exercício 44: Triagem Médica
const prompt = require('prompt-sync')();
console.log("\n--- Triagem Médica ---");

const temperatura = Number(prompt("Temperatura (°C): "));
const pressao = Number(prompt("Pressão Arterial (mmHg): "));

if (isNaN(temperatura) || isNaN(pressao) || temperatura <= 0 || pressao <= 0) {
    console.log("Erro: Informe valores numéricos e positivos para temperatura e pressão.");
} else {
    let urgencia;

    if (temperatura > 37 && pressao > 140) {
        urgencia = "Emergência 🚨";
    } else if (temperatura > 37 || pressao > 140) {
        urgencia = "Urgente ⚠️";
    } else {
        urgencia = "Não Urgente ✅";
    }

    console.log(`\nCom temperatura de ${temperatura}°C e pressão de ${pressao}mmHg, a triagem é: ${urgencia}`);
}