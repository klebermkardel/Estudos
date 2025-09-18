// Implementando o Bubble Sort: Crie um script. Defina um array de números desordenado (ex: [5, 3, 8, 4, 2]). Chame a função bubbleSort que te dei acima para ordenar este array. No final, imprima o array para confirmar que ele foi ordenado corretamente.

/**
 * Ordena um array de números em ordem crescente usando o algoritmo Bubble Sort.
 * @param {Array<number>} array - O array de números a ser ordenado.
 * @returns {Array<number>} O mesmo array, agora ordenado.
 */
function bubbleSort(array) {
    // Armazena o tamanho do array para evitar chamá-lo repetidamente no laço.
    const n = array.length;

    // Laço Externo: controla quantas passagens completas serão feitas sobre o array.
    // Ele precisa rodar 'n - 1' vezes para garantir que o array esteja ordenado.
    for (let i = 0; i < n - 1; i++) {
        
        // Laço Interno: percorre o array comparando os pares de elementos adjacentes.
        // O '- i' no final é uma otimização: a cada passagem, o maior elemento já "borbulhou"
        // para o final, então não precisamos mais compará-lo.
        for (let j = 0; j < n - 1 - i; j++) {
            
            // A Condição: compara um elemento com o seu vizinho da direita.
            if (array[j] > array[j + 1]) {
                
                // A Troca (Swap): Se o elemento da esquerda for maior, trocamos suas posições.
                // 1. Guarda o valor de array[j] em uma variável temporária.
                const temp = array[j];
                // 2. Coloca o valor de array[j+1] na posição de array[j].
                array[j] = array[j + 1];
                // 3. Coloca o valor guardado (original de array[j]) na posição de array[j+1].
                array[j + 1] = temp;
            }
        }
    }
    // Ao final de todas as passagens, a função retorna o array, que agora está ordenado.
    return array;
}

// --- SCRIPT PRINCIPAL ---

// 1. O array desordenado que servirá de entrada para a função.
const numeros = [5, 3, 8, 4, 2];

// Exibe um título e o estado inicial do array.
console.log("\n--- Algoritmo Bubble Sort ---");
console.log(`Array original:  [${numeros.join(', ')}]`);

// 2. Chama a função de ordenação, passando o array 'numeros'.
// O valor retornado (o array ordenado) é armazenado na constante 'numerosOrdenados'.
const numerosOrdenados = bubbleSort(numeros);

// 3. Imprime o resultado final para verificar a ordenação.
console.log(`Array ordenado:  [${numerosOrdenados.join(', ')}]`);