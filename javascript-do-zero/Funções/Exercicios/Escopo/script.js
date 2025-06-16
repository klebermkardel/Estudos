/*

Crie uma função que declare uma variável com o mesmo nome de uma variável global e imprima as duas para mostrar que são diferentes.

*/

// Variável declarada no escopo global
const nome = "João"

function saudacao() {
    // Variável com o mesmo nome declarada no escopo da função (escopo local)
    const nome = "Maria"
    console.log(nome) // Vai imprimir "Maria", pois usa a variável local
}

saudacao() // Saída: Maria
console.log(nome) // Saída: João (usa a variável global)