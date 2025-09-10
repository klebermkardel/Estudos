// Calcular a Média: Crie um array com 5 notas. Use um laço for para somar todas as notas e, no final, calcule e imprima a média aritmética delas.

// Calcular a Média: Crie um programa interativo que peça 5 notas, some-as e calcule a média.

// Importa a biblioteca para entrada de dados.
const prompt = require('prompt-sync')();

// --- INICIALIZAÇÃO ---
// Usar uma constante para o número de notas torna o código fácil de modificar (ex: para 4 bimestres).
const numeroDeNotas = 5;
// Começamos com um array vazio que será preenchido com as notas do usuário.
const notas = [];
// O acumulador para a soma das notas começa em 0.
let somaNotas = 0;

console.log("\n--- Calculadora de Média de Notas ---\n");

// --- LAÇO DE COLETA DE DADOS ---
// O laço 'for' garante que pediremos a quantidade exata de notas válidas.
for (let i = 0; i < numeroDeNotas; i++) {
    // O '${i + 1}' é uma forma inteligente de mostrar ao usuário "1ª nota", "2ª nota", etc.
    const nota = Number(prompt(`Digite a ${i + 1}ª nota: `));

    // --- BLOCO DE VALIDAÇÃO ---
    // A validação checa se a entrada é um número e se está na faixa de 0 a 10.
    if (isNaN(nota) || nota < 0 || nota > 10) {
        console.log("   -> Erro: Por favor, informe uma nota válida (entre 0 e 10).");
        // Esta é a parte mais inteligente do código:
        // 1. i--: Decrementa o contador para "devolver" a tentativa ao usuário.
        i--;
        // 2. continue: Pula o resto desta iteração e volta para o início do 'for'.
        //    Como 'i' foi decrementado, na próxima volta ele terá o mesmo valor,
        //    efetivamente refazendo a tentativa inválida.
        continue;
    }

    // --- PROCESSAMENTO DA ENTRADA VÁLIDA ---
    // Se o código chegou aqui, a nota é válida.

    // Adiciona a nota validada ao final do array 'notas'.
    notas.push(nota);
    // Adiciona a nota validada à soma total.
    // (Nota: você poderia usar 'somaNotas += nota;' aqui também, o resultado seria o mesmo).
    somaNotas += notas[i];
}

// --- CÁLCULO E SAÍDA FINAL ---
// A média é calculada usando o valor final da soma e o tamanho do array.
const mediaFinal = somaNotas / notas.length;

console.log("\n-------------------------------------");
// O método '.join(', ')' exibe o array de forma legível.
console.log(`As notas digitadas foram: ${notas.join(', ')}`);
// O método '.toFixed(2)' formata a média para ter duas casas decimais.
console.log(`A média final do aluno foi: ${mediaFinal.toFixed(2)}`);
