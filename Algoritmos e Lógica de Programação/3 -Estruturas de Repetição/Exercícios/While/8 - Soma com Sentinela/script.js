// Peça ao usuário para digitar números um após o outro. Some todos os números digitados.
// O laço while deve parar quando o usuário digitar o número 0. No final, exiba a soma total.

// Importa a biblioteca 'prompt-sync'.
const prompt = require('prompt-sync')();

// Inicializa a variável 'soma' com 0. Este é o nosso "acumulador".
let soma = 0;

// --- LEITURA DE PREPARAÇÃO (PRIMING READ) ---
// Pedimos o primeiro número ANTES do laço. Isso "prepara" a variável
// para ser testada na condição do 'while'.
let numeroDigitado = Number(prompt("Digite um número para somar (ou 0 para sair): "));

// --- VALIDAÇÃO DA PRIMEIRA ENTRADA ---
// Validamos a entrada inicial. Se for inválida, exibimos um erro e o laço nunca é iniciado.
if (isNaN(numeroDigitado) || !Number.isInteger(numeroDigitado)){
    console.log("Erro: A primeira entrada foi inválida.");
} else {
    // --- LAÇO WHILE ---
    // O laço continua executando ENQUANTO o número digitado for diferente de 0.
    // O número 0 é o nosso "sentinela" para parar o laço.
    while (numeroDigitado !== 0) {
        
        // Se o código chegou aqui, o 'numeroDigitado' é válido e não é 0.
        // Portanto, ele é somado ao acumulador 'soma'.
        soma += numeroDigitado;
        
        // Pedimos o PRÓXIMO número, dentro do laço.
        numeroDigitado = Number(prompt("Digite o próximo número (ou 0 para sair): "));

        // --- VALIDAÇÃO DA ENTRADA SEGUINTE ---
        // Verificamos se a nova entrada é inválida. Se for...
        if(isNaN(numeroDigitado) || !Number.isInteger(numeroDigitado)) {
            console.log("Erro: Entrada inválida ignorada. Digite um número inteiro.");
            // ...e aqui está o bug sutil: você atribui -1 para continuar o loop, mas
            // na próxima iteração, esse -1 será somado, o que é incorreto.
            // Para corrigir, a soma deveria ser condicional.
            numeroDigitado = -1;
        }
    }
}


// --- SAÍDA FINAL ---
// Este código só é executado uma vez, depois que o laço termina.
console.log(`A soma de todos os números digitados é ${soma}`);