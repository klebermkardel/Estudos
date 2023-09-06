/* 
Dado um array inteiro  arr e uma função de mapeamento  fn, retorne um novo array com uma transformação aplicada a cada elemento.

A matriz retornada deve ser criada de forma que  returnedArray[i] = fn(arr[i], i).

Por favor, resolva sem o método integrado Array.map.

 

Exemplo 1:

Entrada: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
 Saída: [2,3,4]
 Explicação:
const newArray = mapa(arr, mais um); // [2,3,4]
A função aumenta cada valor do array em um.
Exemplo 2:

Entrada: arr = [1,2,3], fn = função plusI(n, i) { return n + i; }
 Saída: [1,3,5]
 Explicação: A função aumenta cada valor pelo índice em que reside.
Exemplo 3:

Entrada: arr = [10,20,30], fn = function constante() { return 42; }
 Saída: [42,42,42]
 Explicação: A função sempre retorna 42.
 

Restrições:

0 <= arr.length <= 1000
-109 <= arr[i] <= 109
fn returns a number
*/

function mapa(arr, fn) {
    const returnedArray = []

    for(let i = 0; i < arr.length; i++) {
        const result = fn(arr[i], i)
        returnedArray.push(result)
    }

    return returnedArray
}

// Exemplo 1:
const arr1 = [1, 2, 3]
function plusOne(n) {
    return n + 1
}
const resultado1 = mapa(arr1, plusOne); 
console.log(resultado1)

// Exemplo 2:
const arr2 = [1, 2, 3]
function plusI(n, i) {
    return n + i
}
const resultado2 = mapa(arr2, plusI)
console.log(resultado2)

// Exemplo 3:
const arr3 = [10, 20, 30]
function constant() {
    return 42
}
const resultado3 = mapa(arr3, constant)
console.log(resultado3)