// Escreva uma função  createHelloWorld. Deve retornar uma nova função que sempre retorna  "Hello World"

const createHelloWorld = () => () => "Hello, World!";

const helloFunction = createHelloWorld();
console.log(helloFunction());