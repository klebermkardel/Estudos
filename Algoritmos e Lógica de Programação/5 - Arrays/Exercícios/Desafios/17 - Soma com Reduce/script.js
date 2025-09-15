// Somar Tudo com reduce: Crie um array de números. Use o método .reduce()
// para calcular a soma de todos os elementos.

// 1. O ARRAY ORIGINAL
const numeros = [1, 2, 3, 4, 5];

// --- LÓGICA COM .reduce() ---

// O método .reduce() "reduz" o array a um único valor.
const somaTotal = numeros.reduce(
    // A função de callback é executada para cada elemento do array.
    // Ela recebe dois parâmetros principais:
    // 1. 'acumulador': O valor acumulado da iteração anterior.
    // 2. 'valorAtual': O elemento do array que está sendo processado agora.
    (acumulador, valorAtual) => {
        // A função deve retornar o novo valor do acumulador.
        return acumulador + valorAtual;
    }, 
    0 // Este é o valor inicial do acumulador.
);

// --- SAÍDA FINAL ---
console.log("\n--- Soma com .reduce() ---");
console.log(`Array original: [${numeros.join(', ')}]`);
console.log(`A soma total dos elementos é: ${somaTotal}`); // Saída: 15