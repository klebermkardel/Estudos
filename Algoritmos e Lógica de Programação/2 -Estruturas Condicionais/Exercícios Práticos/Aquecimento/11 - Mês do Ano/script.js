// Mês do Ano: Peça um número de 1 a 12 e imprima o nome do mês correspondente.
// Use a estrutura switch.

// Importa a biblioteca para entrada de dados do usuário no terminal.
const prompt = require('prompt-sync')();

// Imprime uma linha em branco para melhor formatação da saída no console.
console.log();

// Pede ao usuário que informe um número e o converte para o tipo Number.
const MES_DO_ANO = Number(prompt("Informe um mês do ano (1 a 12): "));

// --- BLOCO DE VALIDAÇÃO ---
// Esta condição garante que o programa só prossiga com um número inteiro válido
// e que esteja dentro da faixa esperada (1 a 12).
// Se qualquer uma das verificações for verdadeira, a entrada é considerada inválida.
if (isNaN(MES_DO_ANO) || !Number.isInteger(MES_DO_ANO) || MES_DO_ANO < 1 || MES_DO_ANO > 12) {
    console.log("Erro: Por favor, digite um número inteiro válido de 1 a 12.");
} else {
    // --- BLOCO DE LÓGICA PRINCIPAL ---
    // Este bloco só é executado se a validação for bem-sucedida.

    // Declara a variável que irá armazenar o nome do mês.
    // Usamos 'let' pois seu valor será atribuído dentro do 'switch'.
    let mesDoAno;

    // A estrutura 'switch' é perfeita para comparar o valor de MES_DO_ANO
    // com uma lista de casos específicos (os números de 1 a 12).
    switch (MES_DO_ANO) {
        // Cada 'case' corresponde a um número de mês.
        case 1:
            mesDoAno = "Janeiro";
            // 'break' encerra a execução do 'switch' assim que um caso é correspondido.
            break;
        case 2:
            mesDoAno = "Fevereiro";
            break;
        case 3:
            mesDoAno = "Março";
            break;
        case 4:
            mesDoAno = "Abril";
            break;
        case 5:
            mesDoAno = "Maio";
            break;
        case 6:
            mesDoAno = "Junho";
            break;
        case 7:
            mesDoAno = "Julho";
            break;
        case 8:
            mesDoAno = "Agosto";
            break;
        case 9:
            mesDoAno = "Setembro";
            break;
        case 10:
            mesDoAno = "Outubro";
            break;
        case 11:
            mesDoAno = "Novembro";
            break;
        case 12:
            mesDoAno = "Dezembro";
            break;
    }

    // --- SAÍDA FINAL ---
    // Após o 'switch' definir o valor de 'mesDoAno', esta linha exibe o resultado final.
    console.log(`O mês do ano correspondente ao número ${MES_DO_ANO} é ${mesDoAno}.`);
}