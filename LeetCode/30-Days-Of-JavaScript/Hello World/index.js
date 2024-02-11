/* Escreva uma função createHelloWorld. Ela deve retornar uma nova função que sempre retorna 'Hello, World!' */

// Define a função createHelloWorld
function createHelloWorld() {
    // Retorna uma função interna
    return function() {
        // Retorna a string 'Hello, World!'
        return 'Hello, World!';
    };
}

// Testando a função createHelloWorld
// Atribui a função retornada por createHelloWorld à variável helloWorldFunction
const helloWorldFunction = createHelloWorld();
// Chama a função helloWorldFunction e imprime o resultado no console
console.log(helloWorldFunction()); // Saída: Hello, World!