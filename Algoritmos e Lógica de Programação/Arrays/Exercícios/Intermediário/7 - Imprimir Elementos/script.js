// Imprimir Elementos com for: Crie um array de números de 1 a 5.
// Use um laço for para percorrer o array e imprimir cada número no console.

// 1. CRIAÇÃO DO ARRAY
// O array é criado com os números que queremos percorrer.
const numeros = [1, 2, 3, 4, 5];

console.log("\n--- Imprimindo os elementos do Array ---");

// --- LAÇO FOR PARA PERCORRER O ARRAY ---
// Esta é a estrutura padrão para percorrer um array do início ao fim.
// 1. let i = 0: A inicialização começa no índice 0 (o primeiro elemento).
// 2. i < numeros.length: A condição continua enquanto 'i' for MENOR que o tamanho do array.
//    Para um array de 5 itens, o laço rodará para i = 0, 1, 2, 3, 4.
// 3. i++: O incremento avança para o próximo índice a cada iteração.
for (let i = 0; i < numeros.length; i++) {
    // A cada repetição, usamos 'numeros[i]' para acessar o elemento
    // que está na posição 'i' do array.
    // 'i' é o índice (a posição), 'numeros[i]' é o valor naquela posição.
    console.log(`O elemento no índice ${i} é: ${numeros[i]}`);
}