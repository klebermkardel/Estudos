/*

Crie uma função que recebe um array de números e retorna o maior número da lista.

Exemplo de entrada: [15, 3, 29, 8, 22]
Saída esperada: O maior número é 29.

*/

function maiorNumero(lista) {
    let maior = lista[0];

    for(i = 1; i < lista.length; i++) {
        if(lista[i] > maior) {
            maior = lista[i]
        }
    }

    return maior;
}
function calcularMaior() {
    let entrada = document.getElementById("numerosInput").value;
    let numeros = entrada.split(",").map(Number); // Converte a string para um array de números

    if (numeros.some(isNaN)) {
        document.getElementById("resultado").textContent = "Por favor, insira apenas números válidos!";
        return;
    }

    let maior = maiorNumero(numeros);
    document.getElementById("resultado").textContent = "O maior número é: " + maior;
}

