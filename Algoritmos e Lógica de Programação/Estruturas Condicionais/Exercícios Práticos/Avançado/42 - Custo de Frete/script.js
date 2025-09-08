// Use switch para definir o custo do frete com base no estado de destino.

// Importa a biblioteca 'prompt-sync' para entrada de dados.
const prompt = require('prompt-sync')();

// Exibe um título para o programa.
console.log("\n--- Calculadora de Frete ---");

// Pede ao usuário a sigla do estado. A entrada é uma string.
const estado = prompt("Digite a sigla do estado de destino (ex: SP): ");

// Declara a variável que irá armazenar o valor do frete.
let valorFrete;

// --- NORMALIZAÇÃO DA ENTRADA ---
// Esta é a linha mais importante para a robustez do código. Normalizamos a entrada ANTES de compará-la.
// 1. .trim(): Remove espaços extras.
// 2. .toUpperCase(): Converte para maiúsculo, garantindo que 'sp' e 'SP' sejam tratados da mesma forma.
const estadoNormalizado = estado.trim().toUpperCase();

// --- BLOCO DE LÓGICA PRINCIPAL ---
// O 'switch' compara a variável normalizada com os estados de destino esperados.
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
    // O bloco 'default' é a nossa regra para "todos os outros" estados.
    default:
        valorFrete = 25.00;
        break;
}

// --- CONFIGURAÇÃO DE SAÍDA DE MOEDA ---
// Criamos um formatador de moeda para o Real (BRL).
const formatadorMoeda = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

// --- SAÍDA FINAL ---
// Exibe o custo do frete para o estado, usando a versão normalizada e formatada.
console.log(`O custo do frete para ${estadoNormalizado} é: ${formatadorMoeda.format(valorFrete)}.`);