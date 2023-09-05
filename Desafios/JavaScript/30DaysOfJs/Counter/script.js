// Dado um número inteiro  n, retorne uma counterfunção. Esta counterfunção retorna inicialmente  n e depois retorna 1 a mais que o valor anterior sempre que for chamada ( n, n + 1, n + 2, etc).

const createCounterFunction = (n) => () => n++;

// Exemplo de uso:
const counter = createCounterFunction(5);

console.log(counter())
console.log(counter())
console.log(counter())
