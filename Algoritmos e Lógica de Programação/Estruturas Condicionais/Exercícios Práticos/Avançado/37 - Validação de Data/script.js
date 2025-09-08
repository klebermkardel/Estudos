// Peça dia, mês e ano e verifique se a data é válida.

// Importa a biblioteca 'prompt-sync' para entrada de dados.
const prompt = require('prompt-sync')();

// Exibe um título para o programa.
console.log("\n--- Validador de Data (dd/mm/aaaa) ---");

// Pede ao usuário que digite o dia, o mês e o ano separadamente.
const dia = Number(prompt("Digite o dia: "));
const mes = Number(prompt("Digite o mês: "));
const ano = Number(prompt("Digite o ano: "));

// --- CONFIGURAÇÃO DAS FLAGS ---
// Começamos com a suposição de que a data é válida. Se qualquer regra for quebrada,
// mudaremos esta variável para 'false'.
let dataValida = true;
// Esta variável armazenará a razão específica pela qual a data foi considerada inválida.
let motivoInvalido = "";

// --- BLOCO DE VALIDAÇÃO (CAMADA 1) ---
// Primeiro, verificamos se as entradas são números inteiros.
if (isNaN(dia) || isNaN(mes) || isNaN(ano) || !Number.isInteger(dia) || !Number.isInteger(mes) || !Number.isInteger(ano)) {
    dataValida = false;
    motivoInvalido = "As entradas devem ser números inteiros.";
} 
// Se forem números inteiros, verificamos se estão dentro de faixas lógicas impossíveis.
else if (ano <= 0 || mes < 1 || mes > 12 || dia < 1 || dia > 31) {
    dataValida = false;
    motivoInvalido = "Ano, mês ou dia fora das faixas básicas permitidas.";
} else {
    // --- BLOCO DE LÓGICA ESPECÍFICA (CAMADA 2) ---
    // Se a data passou nas validações básicas, agora checamos as regras de cada mês.
    
    // Verifica os meses que têm apenas 30 dias.
    if ((mes === 4 || mes === 6 || mes === 9 || mes === 11) && dia > 30) {
        dataValida = false;
        motivoInvalido = `O mês ${mes} só tem 30 dias.`;
    }
    // Verifica o caso especial de Fevereiro.
    else if (mes === 2) {
        // Primeiro, determinamos se o ano é bissexto usando a regra completa.
        const ehBissexto = (ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0;
        
        // Se for bissexto, o dia não pode ser maior que 29.
        if (ehBissexto && dia > 29) {
            dataValida = false;
            motivoInvalido = `O ano ${ano} é bissexto, mas fevereiro só tem 29 dias.`;
        } 
        // Se não for bissexto, o dia não pode ser maior que 28.
        else if (!ehBissexto && dia > 28) {
            dataValida = false;
            motivoInvalido = `O ano ${ano} não é bissexto, e fevereiro só tem 28 dias.`;
        }
    }
    // Nota: Os meses com 31 dias não precisam de uma verificação aqui, pois a validação
    // inicial (dia <= 31) já garante que eles estão corretos.
}

// --- SAÍDA FINAL ---
// Após todas as verificações, usamos o valor final da nossa flag 'dataValida' para decidir o que mostrar.
if (dataValida) {
    // Se a data for válida, formatamos o dia e o mês com um zero à esquerda se necessário.
    const diaFormatado = String(dia).padStart(2, '0');
    const mesFormatado = String(mes).padStart(2, '0');

    console.log(`\nA data ${diaFormatado}/${mesFormatado}/${ano} é VÁLIDA.`);
} else {
    // Se a data for inválida, mostramos a data original e o motivo do erro.
    console.log(`\nA data ${dia}/${mes}/${ano} é INVÁLIDA. Motivo: ${motivoInvalido}`);
}