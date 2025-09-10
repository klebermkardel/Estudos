// Imprimir com forEach: Refaça o exercício 7, mas desta vez, use o método .forEach()
// para imprimir cada número do array.

// 1. CRIAÇÃO DO ARRAY
const numeros = [1, 2, 3, 4, 5];

// --- LÓGICA COM .forEach() ---

// O método .forEach() é chamado no array 'numeros'.
// Ele recebe como argumento uma "função de callback", que é a arrow function que você escreveu.
// O .forEach() vai executar essa função uma vez para CADA elemento do array, automaticamente.
numeros.forEach((numero, indice) => {
    // A cada execução, o .forEach() passa automaticamente dois argumentos para a sua função:
    // 1º: 'numero' -> O valor do elemento atual (ex: 1, depois 2, depois 3...).
    // 2º: 'indice' -> A posição do elemento atual (ex: 0, depois 1, depois 2...).

    // Dentro da função, nós simplesmente usamos esses parâmetros para imprimir a mensagem.
    console.log(`O elemento no índice ${indice} é: ${numero}`);
});