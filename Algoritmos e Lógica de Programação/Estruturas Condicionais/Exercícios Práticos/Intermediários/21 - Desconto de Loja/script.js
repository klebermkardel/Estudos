// Desconto da Loja: Peça o valor de uma compra e aplique um desconto de 10% se for maior igual a R$ 200,00.

const prompt = require('prompt-sync')();

const formatadorMoeda = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
});

console.log("\n--- Desconto de Loja ---\n");

const valorDigitado = prompt("Digite o valor da compra (Ex: 1.500,75): ");
const valorLimpo = valorDigitado.replace(/\./g, "").replace(',', '.');
const valorDaCompra = Number(valorLimpo);

const desconto = 0.10;

if(isNaN(valorDaCompra) || valorDaCompra <= 0) {
    console.log("Erro: Informe um valor acima de 0.00");
} else {
    let valorFinal;
    let mensagemDesconto;

    if(valorDaCompra >= 200) {
        const valorDesconto = valorDaCompra * desconto;
        valorFinal = valorDaCompra - valorDesconto;
        mensagemDesconto = `10% - ${formatadorMoeda.format(valorDesconto)}`
    } else {
        valorFinal = valorDaCompra;
        mensagemDesconto = "Não se aplica";
    }

     console.log(`\nValor da compra: ${formatadorMoeda.format(valorDaCompra)}`);
    console.log(`Desconto aplicado: ${mensagemDesconto}`);
    console.log(`Valor final a pagar: ${formatadorMoeda.format(valorFinal)}`);
}
