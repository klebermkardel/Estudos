// Conversor de Temperatura: Crie uma função chamada converterCelsiusParaFahrenheit que receba uma temperatura em Celsius e retorne o valor em Fahrenheit. (Fórmula: C * 1.8 + 32).

// Importa a biblioteca 'prompt-sync'.
const prompt = require('prompt-sync')();

// --- 1. DECLARAÇÃO DA FUNÇÃO ---
// A função é declarada como uma Arrow Function.
// Ela é uma "especialista" que sabe fazer uma única coisa: converter Celsius para Fahrenheit.
// - 'celsius' é o parâmetro: o valor de entrada que a função precisa para trabalhar.
const converterCelsiusParaFahrenheit = (celsius) => {
    // Aplica a fórmula matemática para a conversão.
    const fahrenheit = celsius * 1.8 + 32;
    // O comando 'return' envia o resultado do cálculo de volta para quem chamou a função.
    return fahrenheit;
};

// --- 2. ENTRADA DE DADOS ---
// Pede ao usuário a temperatura e a converte para Number.
// É correto usar Number() e não isInteger(), pois temperaturas podem ser decimais.
const temperaturaDigitada = Number(prompt("Quantos graus Celsius você deseja converter? "));

// --- 3. VALIDAÇÃO ---
// A validação verifica apenas se a entrada é um número, que é o requisito correto para este problema.
if (isNaN(temperaturaDigitada)) {
    console.log("Erro: Por favor, informe um número válido.");
} else {
    // --- 4. CHAMADA DA FUNÇÃO E SAÍDA ---
    // Este bloco só é executado se a entrada for um número.
    
    // A função 'converterCelsiusParaFahrenheit' é chamada aqui, passando 'temperaturaDigitada'
    // como argumento. O valor retornado pela função é usado diretamente na string de saída.
    console.log(`${temperaturaDigitada}ºC = ${converterCelsiusParaFahrenheit(temperaturaDigitada).toFixed(2)}ºF`);
}