// Peça dia, mês e ano e verifique se a data é válida.

const prompt = require('prompt-sync')();

console.log("\n--- Validador de Data (dd/mm/aaa) ---");

const dia = Number(prompt("Digite o dia: "));
const mes = Number(prompt("Digite o mês: "));
const ano = Number(prompt("Digite o ano: "));

let dataValida = true;
let motivoInvalido = "";

if(isNaN(dia) || isNaN(mes) || isNaN(ano) || !Number.isInteger(dia) || !Number.isInteger(mes) || !Number.isInteger(ano)) {
    dataValida = false;
    motivoInvalido = "As entradas devem ser números inteiros.";
} else if (ano <= 0 || mes < 1 || mes > 12 || dia < 1 || dia > 31) {
    dataValida = false;
    motivoInvalido = "Ano, mês ou dia fora das faixas básicas.";
} else {
    // Meses com 30 dias
    if ((mes === 4 || mes === 6 || mes === 9 || mes === 11) && dia > 30) {
        dataValida = false;
        motivoInvalido = `O mês ${mes} só tem 30 dias.`;
    }
    // Fevereiro
    else if (mes === 2) {
        const ehBissexto = (ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0;
        if (ehBissexto && dia > 29) {
            dataValida = false;
            motivoInvalido = `O ano ${ano} é bissexto, mas fevereiro só tem 29 dias,`;
        } else if (!ehBissexto && dia > 28) {
            dataValida = false;
            motivoInvalido = `O ano ${ano} não é bissexto, e fevereiro só tem 28 dias`;
        }
    }
}

if (dataValida) {
    const diaFormatado = String(dia).padStart(2, '0');
    const mesFormatado = String(mes).padStart(2, '0');

    console.log(`A data ${diaFormatado}/${mesFormatado}/${ano} é VÁLIDA`);
} else {
    console.log(`A data ${dia}/${mes}/${ano} é INVÁLIDA. Motivo: ${motivoInvalido}`);
}


