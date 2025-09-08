// Tabuada: Peça ao usuário um número e, em seguida, use um laço for para imprimir
// a tabuada desse número, de 1 a 10.

// Importa a biblioteca 'prompt-sync' para entrada de dados.
const prompt = require('prompt-sync')();

// Pede ao usuário o número para a tabuada e o converte para o tipo Number.
const numero = Number(prompt("Informe o número para o qual deseja calcular a tabuada: "));

// --- BLOCO DE VALIDAÇÃO ---
// Garante que a entrada seja um número inteiro válido.
if (isNaN(numero) || !Number.isInteger(numero)) {
    console.log("Erro: Por favor, informe um número inteiro.");
} else {
    // --- BLOCO DE LÓGICA PRINCIPAL ---
    
    // O laço 'for' é perfeito aqui, pois sabemos que queremos repetir a operação exatamente 10 vezes.
    // A variável 'i' (o multiplicador) irá de 1 até 10.
    for (let i = 1; i <= 10; i++) {
        // A cada repetição, calculamos o resultado da multiplicação.
        const resultado = numero * i;

        // Exibimos a linha da tabuada de forma formatada.
        // Ex: Na primeira volta, imprime "5 x 1 = 5", na segunda, "5 x 2 = 10", e assim por diante.
        console.log(`${numero} x ${i} = ${resultado}`);
    }
}