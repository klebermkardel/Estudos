// Encontrar o Maior Número: Crie um array com vários números. Use um laço for
// e uma estrutura condicional if para encontrar o maior número dentro do array.

// 1. CRIAÇÃO DO ARRAY
// O array de números a ser verificado.
const numeros = [15, 7, 22, 48, 11, -2];

console.log("\n--- Encontrando o Maior Número da Lista ---\n");

// --- INICIALIZAÇÃO DA VARIÁVEL RASTREADORA ---
// Começamos assumindo que o primeiro item (numeros[0]) é o maior.
// Isso torna o código à prova de falhas, funcionando até com listas de números negativos.
let maiorNumero = numeros[0];

// --- LAÇO DE COMPARAÇÃO ---
// O laço for percorre cada elemento do array para compará-lo com o maior número encontrado até agora.
for (let i = 0; i < numeros.length; i++) {
    
    // A cada iteração, verificamos se o elemento atual (numeros[i])
    // é maior do que o 'maiorNumero' que temos guardado.
    if (numeros[i] > maiorNumero) {
        
        // Se for maior, nós atualizamos o valor de 'maiorNumero'
        // para este novo valor maior.
        maiorNumero = numeros[i];
    }
}

// --- SAÍDA FINAL ---
// Após o laço ter percorrido toda a lista, a variável 'maiorNumero'
// conterá o maior valor encontrado.
console.log(`O maior número encontrado na lista é: ${maiorNumero}`);