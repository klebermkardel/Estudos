/* Dado um número inteiro n, retorne uma função de contador. Esta função de contador inicialmente retorna n e então retorna 1 a mais que o valor anterior cada vez que é chamada subsequentemente (n, n + 1, n + 2, etc). */

function createCounter(n) {
    // Declara uma variável interna para armazenar o estado atual do contador
    let count = n;

    // Retorna uma função que atua como contador
    return function() {
        // Incrementa o contador em 1 e retorna o valor atualizado
        return count++;
    };
}

// Testando a função createCounter
const counter = createCounter(5); // Inicia o contador em 5

console.log(counter()); // Saída: 5
console.log(counter()); // Saída: 6
console.log(counter()); // Saída: 7
