// Desconto da Loja: Peça o valor de uma compra e aplique um desconto de 10%
// se for maior ou igual a R$ 200,00.

// Importa a biblioteca 'prompt-sync'.
const prompt = require('prompt-sync')();

// --- CONFIGURAÇÃO DE SAÍDA DE MOEDA ---
// Criamos um formatador de moeda para o Real (BRL).
// Isso garante que a saída terá o símbolo R$, a vírgula e o ponto de milhar corretamente.
const formatadorMoeda = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
});

// Exibe um título para o programa.
console.log("\n--- Desconto de Loja ---\n");

// --- ENTRADA E TRATAMENTO DE DADOS ---
// Pede o valor da compra.
const valorDigitado = prompt("Digite o valor da compra (Ex: 1.500,75): ");
// Esta é uma etapa crucial: limpamos a entrada do usuário.
// 1. .replace(/\./g, ""): Remove todos os pontos (separadores de milhar).
// 2. .replace(',', '.'): Troca a vírgula (separador decimal) por um ponto,
//    que é o formato que o JavaScript entende para números.
const valorLimpo = valorDigitado.replace(/\./g, "").replace(',', '.');
// Converte a string já limpa para o tipo Number.
const valorDaCompra = Number(valorLimpo);

// A constante para o valor do desconto. É uma boa prática armazenar isso em uma constante.
const desconto = 0.10;

// --- BLOCO DE VALIDAÇÃO ---
// Garante que o valor da compra seja um número e seja positivo.
if (isNaN(valorDaCompra) || valorDaCompra <= 0) {
    console.log("Erro: Informe um valor acima de 0.00");
} else {
    // --- BLOCO DE LÓGICA PRINCIPAL ---
    
    // Declaramos as variáveis que vão armazenar o valor final e a mensagem de desconto.
    let valorFinal;
    let mensagemDesconto;

    // Implementa a regra de negócio do desconto.
    // O 'if' verifica se o valor da compra é maior ou igual a 200.
    if (valorDaCompra >= 200) {
        // Se a condição for verdadeira, faz os cálculos do desconto.
        const valorDesconto = valorDaCompra * desconto;
        valorFinal = valorDaCompra - valorDesconto;
        // Prepara a mensagem de desconto, usando o formatador de moeda.
        mensagemDesconto = `10% - ${formatadorMoeda.format(valorDesconto)}`
    } else {
        // Se a condição for falsa, o desconto não se aplica.
        valorFinal = valorDaCompra;
        mensagemDesconto = "Não se aplica";
    }

    // --- SAÍDA FINAL ---
    // Este bloco exibe todos os resultados de forma organizada, uma única vez (princípio DRY).
    // Usamos o formatador de moeda em todas as exibições de valores financeiros.
    console.log(`\nValor da compra:    ${formatadorMoeda.format(valorDaCompra)}`);
    console.log(`Desconto aplicado:  ${mensagemDesconto}`);
    console.log(`Valor final a pagar: ${formatadorMoeda.format(valorFinal)}`);
}