// Peça um dia da semana por extenso e informe se é dia útil ou final de semana.

const prompt = require('prompt-sync')();
console.log("\n--- Verificador de Final de Semana ---");

const dia = prompt("Digite o dia da semana (ex: segunda, sábado): ");
const diaNormalizado = dia.trim().toLowerCase();

let tipoDeDia;

switch (diaNormalizado) {
    case "sábado":
    case "domingo":
        tipoDeDia = "Final de Semana";
        break;
    case "segunda":
    case "terça":
    case "quarta":
    case "quinta":
    case "sexta":
        tipoDeDia = "Dia Útil";
        break;
    default:
        tipoDeDia = "Entrada Inválida";
        break;
}

console.log(`"${dia}" é considerado: ${tipoDeDia}.`);