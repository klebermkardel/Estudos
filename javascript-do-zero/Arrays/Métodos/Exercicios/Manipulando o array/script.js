/*

Usando o array nomes que você já criou:

1. Adicione um novo nome no final

2. Remova o primeiro nome

3. Verifique se "Gustavo" está na lista

4. Mostre o array final no console

*/

const nomes = ["João", "Maria", "José", "Ana", "Gustavo"]

nomes.push("Mariana") // ["João", "Maria", "José", "Ana", "Gustavo", "Mariana"]
nomes.shift() // ["Maria", "José", "Ana", "Gustavo", "Mariana"]
console.log(nomes.includes("Gustavo")) // true

console.log(nomes) // ["Maria", "José", "Ana", "Gustavo", "Mariana"]

