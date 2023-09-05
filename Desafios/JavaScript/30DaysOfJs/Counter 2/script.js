/* 

Escreva uma função  createCounter. Deve aceitar um número inteiro inicial  init. Deve retornar um objeto com três funções.

As três funções são:

increment() aumenta o valor atual em 1 e depois o retorna.
decrement() reduz o valor atual em 1 e depois o retorna.
reset() define o valor atual como  init e depois o retorna.
 

Exemplo 1:

Entrada: init = 5, calls = ["increment","reset","decrement"]
 Saída: [6,5,4]
 Explicação:
contador const = criarContador(5);
contador.incremento(); //6
contador.reset(); //5
contador.decremento(); //4
Exemplo 2:

Entrada: init = 0, calls = ["increment","increment","decrement","reset","reset"]
 Saída: [1,2,1,0,0]
 Explicação:
contador const = criarContador(0);
contador.incremento(); //1
contador.incremento(); //2
contador.decremento(); //1
contador.reset(); //0
contador.reset(); //0
 

Restrições:

-1000 <= init <= 1000
total calls not to exceed 1000

*/

function createCounter(init) {
    let currentValue = init;
  
    return {
      increment: function () {
        currentValue++;
        return currentValue;
      },
      decrement: function () {
        currentValue--;
        return currentValue;
      },
      reset: function () {
        currentValue = init;
        return currentValue;
      },
    };
  }
  
  // Exemplo 1:
  const counter1 = createCounter(5);
  const results1 = [];
  
  results1.push(counter1.increment()); // 6
  results1.push(counter1.reset());     // 5
  results1.push(counter1.decrement()); // 4
  
  console.log(results1); // Saída: [6, 5, 4]
  
  // Exemplo 2:
  const counter2 = createCounter(0);
  const results2 = [];
  
  results2.push(counter2.increment()); // 1
  results2.push(counter2.increment()); // 2
  results2.push(counter2.decrement()); // 1
  results2.push(counter2.reset());     // 0
  results2.push(counter2.reset());     // 0
  
  console.log(results2); // Saída: [1, 2, 1, 0, 0]
  