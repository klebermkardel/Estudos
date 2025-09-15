/*
Preço do Ingresso de Cinema: Calcule o preço com base na idade e se a pessoa é estudante.
*/

// Importa a biblioteca para entrada de dados.
const prompt = require('prompt-sync')();

// Cria um formatador de moeda para o Real (BRL), que adiciona R$, vírgulas e pontos.
const formatadorMoeda = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
});

// Exibe o título do programa.
console.log("\n--- Preço do Ingresso ---");

// --- ENTRADA E TRATAMENTO DE DADOS ---
// Pede ao usuário o valor base do ingresso.
const precoInteiroDigitado = prompt("Informe o valor inteiro do ingresso: ");
// Limpa a entrada para aceitar formatos como "40,00" ou "40.00".
const precoLimpo = precoInteiroDigitado.replace(/\./g, "").replace(',', '.');
// Converte a string limpa para um número.
const precoInteiro = Number(precoLimpo);

// Pede a idade do usuário.
const idade = Number(prompt("Informe a sua idade: "));
// Pede a informação sobre ser estudante.
const respostaEstudante = prompt("Você é estudante? (sim/não): ");


// --- BLOCO DE VALIDAÇÃO ---
// Garante que todas as entradas numéricas são válidas antes de prosseguir.
if (isNaN(precoInteiro) || isNaN(idade) || !Number.isInteger(idade) || precoInteiro < 0 || idade < 0) {
    console.log("Erro: Por favor informe um preço válido e um número inteiro e positivo para a idade");
} else {
    // --- BLOCO DE LÓGICA PRINCIPAL ---
    
    // 1. Normalização da Resposta 'Estudante':
    // Removemos espaços e convertemos para minúsculo para garantir que "Sim", "s", " SIM " etc. funcionem.
    const respostaNormalizada = respostaEstudante.trim().toLowerCase();
    // A variável 'ehEstudante' se torna 'true' se a resposta for "sim" OU "s",
    // e 'false' para qualquer outra coisa.
    const ehEstudante = (respostaNormalizada === 'sim' || respostaNormalizada === 's');

    // Declara a variável que irá armazenar o preço final a ser pago.
    let precoFinal;

    // 2. Condição Unificada de Meia-Entrada:
    // Esta é a parte mais importante. Usamos o operador 'OU' (||) para verificar
    // se QUALQUER uma das 3 regras de meia-entrada é atendida.
    if ((idade >= 0 && idade <= 12) || // É criança? OU...
        idade >= 60 ||                 // É idoso? OU...
        ehEstudante) {                 // É estudante?
        
        // Se qualquer uma das condições acima for verdadeira, calcula a meia-entrada.
        precoFinal = precoInteiro / 2;
        console.log("\nVocê tem direito a meia-entrada!");
    } else {
        // Se NENHUMA das condições de meia-entrada for atendida, o preço é inteiro.
        precoFinal = precoInteiro;
        console.log("\nVocê pagará o valor inteiro.");
    }

    // --- SAÍDA FINAL ---
    // Exibe o preço final já formatado como moeda.
    console.log(`Valor do Ingresso: ${formatadorMoeda.format(precoFinal)}`);
}