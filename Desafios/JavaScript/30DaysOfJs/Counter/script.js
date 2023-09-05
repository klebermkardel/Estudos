// Dado um número inteiro  n, retorne uma counterfunção. Esta counterfunção retorna inicialmente  n e depois retorna 1 a mais que o valor anterior sempre que for chamada ( n, n + 1, n + 2, etc).

const createCounter = (n) => () => n++;
const counter = createCounter(1);

document.getElementById("btn-increment").addEventListener("click", function () {
    const outputDiv = document.getElementById("output");
    const result = counter();
    outputDiv.textContent = result;
})