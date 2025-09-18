// Implementando o Selection Sort: Crie um script. Defina um array de números desordenado (ex: [7, 5, 1, 8, 3]). Chame a função selectionSort que te dei para ordenar este array. No final, imprima o array original e o array ordenado para confirmar o resultado.


/**
 * Ordena um array de números em ordem crescente usando o algoritmo Selection Sort.
 * @param {Array<number>} array - O array a ser ordenado.
 * @returns {Array<number>} O mesmo array, agora ordenado.
 */
function selectionSort(array) {
    const n = array.length;

    // Laço Externo: Percorre o array, movendo a fronteira entre a parte ordenada e a desordenada.
    // O 'i' representa o início da parte desordenada.
    for (let i = 0; i < n - 1; i++) {
        // Assume que o menor elemento da parte desordenada é o primeiro (posição 'i').
        let menorIndice = i;

        // Laço Interno: Percorre a parte desordenada (de i+1 até o fim) para
        // encontrar o verdadeiro índice do menor elemento.
        for (let j = i + 1; j < n; j++) {
            // Se encontrarmos um elemento menor que o nosso 'menor' atual...
            if (array[j] < array[menorIndice]) {
                // ...guardamos o novo índice como o menor.
                menorIndice = j;
            }
        }

        // Após o laço interno, 'menorIndice' contém a posição do menor elemento.
        // Se essa posição for diferente da inicial, realizamos a troca.
        if (menorIndice !== i) {
            const temp = array[i];
            array[i] = array[menorIndice];
            array[menorIndice] = temp;
        }
    }

    // Retorna o array, que foi modificado e agora está ordenado.
    return array;
}

// --- SCRIPT PRINCIPAL ---
// O array desordenado que será usado como entrada.
const numeros = [7, 5, 1, 8, 3];

console.log("\n--- Algoritmo Selection Sort ---");
console.log(`Array original:  [${numeros.join(', ')}]`);

// Chama a função de ordenação.
const numerosOrdenados = selectionSort(numeros);

// Imprime o resultado final.
console.log(`Array ordenado:  [${numerosOrdenados.join(', ')}]`);