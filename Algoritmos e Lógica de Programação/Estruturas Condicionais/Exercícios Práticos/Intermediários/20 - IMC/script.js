// IMC (Índice de Massa Corporal): Peça o peso (kg) e a altura (m) de uma pessoa.
// Calcule o IMC e classifique o resultado.

// Importa a biblioteca 'prompt-sync' para entrada de dados.
const prompt = require('prompt-sync')();

// Exibe um título para o programa.
console.log("\n--- Calculadora de IMC ---\n");

// Pede ao usuário o peso e a altura, convertendo ambos para o tipo Number.
// As entradas podem ter casas decimais.
const peso = Number(prompt("Informe o seu peso (Ex: 75.5): "));
const altura = Number(prompt("Informe a sua altura (Ex: 1.75): "));

// --- BLOCO DE VALIDAÇÃO ---
// Garante que o peso e a altura sejam números positivos e válidos.
// Se qualquer uma das condições (NaN, ou valor <= 0) for verdadeira, o programa exibe um erro.
if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    console.log("Erro: Por favor, informe valores numéricos e positivos para o peso e a altura.");
} else {
    // --- BLOCO DE LÓGICA PRINCIPAL ---

    // A fórmula para o IMC é peso / (altura * altura).
    // O operador '** 2' é a forma moderna e concisa de calcular a potência.
    const imc = peso / (altura ** 2);

    // Declara a variável que irá armazenar a classificação final.
    let classificacao;

    // A cadeia 'if...else if' é ideal para classificar o IMC por faixas de valores.
    // A ordem de verificação, da menor faixa para a maior, é crucial para a eficiência.

    // 1ª Verificação: A faixa mais baixa
    if (imc < 18.5) {
        classificacao = "Abaixo do peso"
    }
    // 2ª Verificação: Se o código chegou aqui, já sabemos que o IMC é >= 18.5.
    // A condição 'imc < 25' já é suficiente para verificar a faixa 'Peso normal'.
    else if (imc < 25) {
        classi
ficação = "Peso normal";
    }
    // 3ª Verificação: Se o código chegou aqui, já sabemos que o IMC é >= 25.
    else if (imc < 30) {
        classificacao = "Sobrepeso";
    }
    // 4ª Verificação: Se nenhuma das condições anteriores foi verdadeira,
    // o IMC só pode ser 30 ou mais. O 'else' final captura este caso.
    else {
        classificacao = "Obesidade";
    }

    // --- SAÍDA FINAL ---
    // Exibe o IMC e sua classificação.
    // O método '.toFixed(2)' formata o número para ter 2 casas decimais, o que é ótimo para a leitura.
    console.log(`\nSeu IMC é: ${imc.toFixed(2)}`);
    console.log(`Classificação: ${classificacao}`);
}