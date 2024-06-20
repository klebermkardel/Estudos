// Leia o valor de uma compra e aplique um desconto de 10% se o valor for maior que R$ 100,00. Caso contrário, aplique um desconto de 5%

const valorTotal = parseFloat(prompt("Informe o valor total da compra:"));

if (isNaN(valorTotal)) {
    alert("Valor informado não é um número válido. Por favor, tente novamente.");
} else {
    const desc10 = valorTotal * (10 / 100);
    const desc5 = valorTotal * (5 / 100);

    let valorFinal;

    if (valorTotal >= 100) {
        valorFinal = valorTotal - desc10;
    } else {
        valorFinal = valorTotal - desc5;
    }

    alert(`Valor total da compra: ${valorTotal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}\nValor final da compra: ${valorFinal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`);
}
