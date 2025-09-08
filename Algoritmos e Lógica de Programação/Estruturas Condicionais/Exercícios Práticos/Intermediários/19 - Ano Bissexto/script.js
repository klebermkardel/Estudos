// Ano Bissexto: Peça um ano e verifique se ele é bissexto.
// (Um ano é bissexto se for divisível por 4, exceto para anos que são divisíveis por 100 mas não por 400).

// Importa a biblioteca 'prompt-sync' para a entrada de dados.
const prompt = require('prompt-sync')();

// Exibe um título para o programa.
console.log("\n--- Verificador de Ano Bissexto ---\n");

// Pede ao usuário que informe o ano e o converte para o tipo Number.
const ano = Number(prompt("Informe um ano: "));

// --- BLOCO DE VALIDAÇÃO ---
// Garante que o ano seja um número inteiro e positivo, que são os requisitos lógicos para o problema.
if (isNaN(ano) || !Number.isInteger(ano) || ano <= 0) {
    console.log("Erro: Por favor, digite um número inteiro e positivo válido.");
} else {
    // --- BLOCO DE LÓGICA PRINCIPAL ---

    // Começamos com a suposição de que o ano não é bissexto.
    // Esta variável (a 'flag') mudará para 'true' apenas se o ano passar por todas as regras.
    let ehBissexto = false;

    // 1º Nível de Lógica (o Portão Principal):
    // A primeira regra é que o ano deve ser divisível por 4.
    // Se esta condição for falsa, o programa já conclui que não é bissexto.
    if (ano % 4 === 0) {
        
        // 2º Nível de Lógica (a Primeira Exceção):
        // Se o ano é divisível por 4, a próxima checagem é: ele é divisível por 100?
        if (ano % 100 === 0) {
            
            // 3º Nível de Lógica (a Exceção da Exceção):
            // Se o ano é divisível por 100, a última checagem é: ele também é divisível por 400?
            // Esta é a regra mais específica.
            if (ano % 400 === 0) {
                ehBissexto = true; // Exemplo: O ano 2000 é bissexto.
            } else {
                ehBissexto = false; // Exemplo: O ano 1900 não é bissexto.
            }
        } else {
            // Este bloco é para anos divisíveis por 4, mas NÃO por 100.
            // Exemplo: O ano 2024. Ele é bissexto.
            ehBissexto = true;
        }
    } else {
        // Este bloco final lida com anos que não são divisíveis por 4.
        // Exemplo: O ano 2023. Ele não é bissexto.
        ehBissexto = false;
    }

    // Usamos o operador ternário para montar a frase final de forma limpa.
    const situacaoAno = ehBissexto ? "é bissexto" : "não é bissexto";
    
    // Imprimimos o resultado final.
    console.log(`O ano de ${ano} ${situacaoAno}.`);
}