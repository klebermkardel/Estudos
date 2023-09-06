/* 
Dado um array inteiro arre uma função de filtragem fn, retorne um array filtrado filteredArr.

A fnfunção leva um ou dois argumentos:

arr[i]- número doarr
i - índice dearr[i]
filteredArrdeve conter apenas os elementos dos  arrquais a expressão fn(arr[i], i)é avaliada como um valor verdadeiro . Um  valor verdadeiro  é um valor onde  Boolean(value) retorna  true.

Resolva-o sem o método Array.filter integrado.

 

Exemplo 1:

Entrada: arr = [0,10,20,30], fn = function maior que10(n) { return n > 10; }
 Saída: [20,30]
 Explicação: 
const newArray = filter(arr, fn); // [20, 30] 
A função filtra valores que não sejam maiores que 10
Exemplo 2:

Entrada: arr = [1,2,3], fn = function firstIndex(n, i) { return i === 0; }
 Saída: [1]
 Explicação: 
fn também pode aceitar o índice de cada elemento. 
Nesse caso, a função remove elementos que não estão no índice 0
Exemplo 3:

Entrada: arr = [-2,-1,0,1,2], fn = function plusOne(n) { return n + 1 }
 Saída: [-2,0,1,2]
 Explicação: 
valores falsos como 0 deve ser filtrado
 

Restrições:

0 <= arr.length <= 1000
-109 <= arr[i] <= 109
*/

function filtrar(arr, fn) {
    const filteredArr = [];
  
    for (let i = 0; i < arr.length; i++) {
      const result = fn(arr[i], i);
  
      if (Boolean(result)) {
        filteredArr.push(arr[i]);
      }
    }
  

    return filteredArr;
  }
  
  // Exemplo 1:
  const arr1 = [0, 10, 20, 30];
  function maiorQue10(n) {
    return n > 10;
  }
  const resultado1 = filtrar(arr1, maiorQue10); 
  console.log(resultado1);
  
  // Exemplo 2:
  const arr2 = [1, 2, 3];
  function firstIndex(n, i) {
    return i === 0;
  }
  const resultado2 = filtrar(arr2, firstIndex); 
  console.log(resultado2);
  
  // Exemplo 3:
  const arr3 = [-2, -1, 0, 1, 2];
  function plusOne(n) {
    return n + 1;
  }
  const resultado3 = filtrar(arr3, plusOne); 
  console.log(resultado3);
  