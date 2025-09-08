// Pares e Ímpares: Use um laço for para iterar de 1 a 20. Dentro do laço, use uma estrutura
// condicional (if) para verificar se o número é par ou ímpar e imprima uma mensagem.

// --- LAÇO FOR ---
// O laço irá repetir 20 vezes para cada número no intervalo de 1 a 20.
// 1. let i = 1: A variável 'i' é inicializada em 1.
// 2. i <= 20: A condição é testada a cada repetição.
// 3. i++: A variável 'i' é incrementada a cada repetição.
for (let i = 1; i <= 20; i++) {
    // --- LÓGICA CONDICIONAL ---
    // A cada número do laço, verificamos se ele é par ou ímpar.

    // A condição 'i % 2 === 0' usa o operador módulo (%) para verificar se
    // o resto da divisão de 'i' por 2 é zero. Se sim, o número é par.
    if (i % 2 === 0) {
        console.log(`O número ${i} é par`);
    } else {
        // Se o resto da divisão não for zero, o número é ímpar.
        console.log(`O número ${i} é ímpar`);
    }
}