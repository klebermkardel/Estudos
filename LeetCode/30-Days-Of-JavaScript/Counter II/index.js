/* Escreva uma função createCounter. Ela deve aceitar um inteiro inicial init. Deve retornar um objeto com três funções.

As três funções são:

increment() aumenta o valor atual em 1 e então o retorna.
decrement() diminui o valor atual em 1 e então o retorna.
reset() define o valor atual como init e então o retorna. */

function createCounter(init) {
    // Declaração da variável para armazenar o valor atual do contador
    let count = init;

    // Retornar um objeto com as funções increment, decrement e reset
    return {
        // Função para incrementar o contador
        increment: function() {
            // Incrementa o contador em 1
            count++;
            // Retorna o novo valor do contador
            return count;
        },

        // Função para decrementar o contador
        decrement: function() {
            // Decrementa o contador em 1
            count--;
            // Retorna o novo valor do contador
            return count;
        },

        // Função para resetar o contador para o valor inicial
        reset: function() {
            // Define o contador como o valor inicial
            count = init;
            // Retorna o valor inicial do contador
            return count;
        }
    };
}

// Criar um contador com valor inicial de 0
const counter = createCounter(0);

// Testar a função increment
console.log(counter.increment()); // Saída: 1
console.log(counter.increment()); // Saída: 2

// Testar a função decrement
console.log(counter.decrement()); // Saída: 1

// Testar a função reset
console.log(counter.reset()); // Saída: 0