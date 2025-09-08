// Use switch para definir o custo do frete com base no estado de destino.

const prompt = require('prompt-sync')();
console.log("\n--- Calculadora de Frete ---");

const estado = prompt("Digite a sigla do estado de destino (ex: SP): ");
let valorFrete;

const estadoNormalizado = estado.trim().toUpperCase();

switch (estadoNormalizado) {
    case 'SP':
        valorFrete = 10.00;
        break;
    case 'RJ':
        valorFrete = 15.00;
        break;
    case 'MG':
        valorFrete = 18.00;
        break;
    default:
        valorFrete = 25.00;
        break;
}

const formatadorMoeda = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
console.log(`O custo do frete para ${estadoNormalizado} é: ${formatadorMoeda.format(valorFrete)}.`);