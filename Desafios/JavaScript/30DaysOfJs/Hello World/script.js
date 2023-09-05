// Escreva uma função  createHelloWorld. Deve retornar uma nova função que sempre retorna  "Hello World"

const createHelloWorld = () => () => "Hello, World!"
        const helloFunction = createHelloWorld()

        document.getElementById("btn").addEventListener("click", function () {
            const outputDiv = document.getElementById("output")
            const result = helloFunction()
            outputDiv.textContent = result
        });