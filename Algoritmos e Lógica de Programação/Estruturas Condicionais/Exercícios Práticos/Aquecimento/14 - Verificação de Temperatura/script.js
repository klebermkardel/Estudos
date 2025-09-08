// Peça uma temperatura em Celsius. Se estiver abaixo de 0, exiba "Congelando".
// Se estiver entre 0 e 25, "Clima Agradável". Se acima de 25, "Calor".

// Importa a biblioteca 'prompt-sync' para a entrada de dados.
const prompt = require('prompt-sync')();

// Exibe um título para o programa.
console.log("\n--- Verificador de Temperatura ---");

// Pede ao usuário que digite a temperatura.
const tempDigitada = prompt("Informe a temperatura em Celsius: ");
// Converte a entrada para o tipo Number. Usar Number() aqui é ideal, pois temperaturas
// podem ter casas decimais (ex: 22.5).
const temperatura = Number(tempDigitada);

// --- BLOCO DE VALIDAÇÃO ---
// A validação aqui é mais simples: só precisamos garantir que a entrada é um número.
// Não precisamos checar se é inteiro, pois temperaturas podem ser decimais.
if (isNaN(temperatura)) {
    console.log("Erro: Por favor, informe um valor numérico para a temperatura.");
} else {
    // --- BLOCO DE LÓGICA PRINCIPAL ---
    // Este bloco só executa se a entrada for um número válido.

    // Declaramos a variável 'statusClima' para armazenar a classificação.
    // Isso nos permite usar um único console.log no final (Código Limpo).
    let statusClima;

    // A cadeia if...else if...else avalia as condições em ordem.

    // 1ª Verificação: A temperatura é menor que 0?
    if (temperatura < 0) {
        statusClima = "Congelando 🥶";
    } 
    // 2ª Verificação: Se não for menor que 0, ela é menor ou igual a 25?
    // Este bloco só é testado se a primeira condição for FALSA.
    // Portanto, já sabemos que a temperatura é >= 0, não precisamos testar isso de novo.
    else if (temperatura <= 25) {
        statusClima = "Clima Agradável 😊";
    } 
    // 3ª Verificação: Se a temperatura não for < 0 e nem <= 25, a única possibilidade
    // que resta é que ela seja > 25. O 'else' captura este caso final.
    else { 
        statusClima = "Calor 🔥";
    }

    // --- SAÍDA FINAL ---
    // Exibe o resultado de forma amigável para o usuário.
    console.log(`Com ${temperatura}°C, o clima está: ${statusClima}`);
}