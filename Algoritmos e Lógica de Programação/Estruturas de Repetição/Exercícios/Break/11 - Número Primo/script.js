// Verificador de Número Primo: Peça um número inteiro e positivo ao usuário.
// Use um laço for para verificar se ele tem algum divisor. Se encontrar um,
// use break para otimizar. No final, informe se o número é primo ou não.

// Importa a biblioteca 'prompt-sync' para entrada de dados.
const prompt = require('prompt-sync')();

// Pede ao usuário um número e o converte para o tipo Number.
const numeroDigitado = Number(prompt("Digite um número inteiro e positivo: "));

// --- BLOCO DE VALIDAÇÃO ---
// Garante que a entrada seja um número inteiro e maior que 1,
// pois 1, 0 e números negativos não são primos por definição.
if (isNaN(numeroDigitado) || !Number.isInteger(numeroDigitado) || numeroDigitado <= 1) {
    console.log("Erro: Por favor, digite um número inteiro maior que 1.");
} else {
    // --- LÓGICA PRINCIPAL ---

    // 1. A "Flag": Começamos com a suposição otimista de que o número É primo.
    // Esta variável só será alterada se encontrarmos uma prova do contrário.
    let ehPrimo = true;

    // 2. O Laço Otimizado:
    // O laço 'for' testa todos os possíveis divisores, começando em 2.
    // Ele vai apenas até a raiz quadrada do número (Math.sqrt(numeroDigitado)).
    // Esta é uma otimização matemática: se um número tem um divisor maior que sua raiz quadrada,
    // ele necessariamente terá um divisor menor também. Portanto, só precisamos procurar até a raiz.
    for (let i = 2; i <= Math.sqrt(numeroDigitado); i++) {
        
        // 3. A Verificação do Divisor:
        // Se o resto da divisão do número por 'i' for 0, encontramos um divisor.
        if (numeroDigitado % i === 0) {
            // Se tem um divisor (além de 1 e ele mesmo), ele não é primo.
            ehPrimo = false;
            
            // 'break' é crucial aqui. Assim que encontramos o primeiro divisor,
            // não há necessidade de continuar testando. O 'break' interrompe o laço.
            break;
        }
    }

    // --- SAÍDA FINAL ---
    // 4. A Decisão Final:
    // Após o laço terminar, verificamos o estado final da nossa 'flag'.
    if (ehPrimo) {
        // Se a 'flag' permaneceu 'true', nenhum divisor foi encontrado.
        console.log(`O número ${numeroDigitado} é um NÚMERO PRIMO.`);
    } else {
        // Se a 'flag' foi alterada para 'false', um divisor foi encontrado.
        console.log(`O número ${numeroDigitado} NÃO é um número primo.`);
    }
}