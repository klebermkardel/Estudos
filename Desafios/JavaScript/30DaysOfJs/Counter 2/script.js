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

const counter = createCounter(0);

document.getElementById("btn-increment").addEventListener("click", function () {
    const outputDiv = document.getElementById("output");
    const result = counter.increment();
    outputDiv.textContent = result;
});

document.getElementById("btn-decrement").addEventListener("click", function () {
    const outputDiv = document.getElementById("output");
    const result = counter.decrement();
    outputDiv.textContent = result;
});

document.getElementById("btn-reset").addEventListener("click", function () {
    const outputDiv = document.getElementById("output");
    const result = counter.reset();
    outputDiv.textContent = result;
});