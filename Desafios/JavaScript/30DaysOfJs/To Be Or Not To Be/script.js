/* Escreva uma função  expectque ajude os desenvolvedores a testar seu código. Deve receber qualquer valor  val e retornar um objeto com as duas funções a seguir.

toBe(val) aceita outro valor e retorna  true se os dois  === se valorizarem. Se eles não forem iguais, deverá ocorrer um erro  "Not Equal".
notToBe(val) aceita outro valor e retorna  true se os dois  !== se valorizarem. Se eles forem iguais, deverá gerar um erro  "Equal".
 

Exemplo 1:

Entrada: func = () => expect(5).toBe(5)
 Saída: {"value": true}
 Explicação: 5 === 5 então esta expressão retorna verdadeiro.

Exemplo 2:

Entrada: func = () => expect(5).toBe(null)
 Saída: {"error": "Not Equal"}
 Explicação: 5 !== null então esta expressão gera o erro "Not Equal".
Exemplo 3:

Entrada: func = () => expect(5).notToBe(null)
 Saída: {"value": true}
 Explicação: 5 !== null então esta expressão retorna verdadeiro.

 */

function expect(val) {
          return {
            toBe: function (otherVal) {
              if (val === otherVal) {
                return { value: true };
              } else {
                throw new Error("Not Equal");
              }
            },
            notToBe: function (otherVal) {
              if (val !== otherVal) {
                return { value: true };
              } else {
                throw new Error("Equal");
              }
            },
          };
        }

        document.getElementById("btn-toBe").addEventListener("click", function () {
            const value1 = document.getElementById("value1").value;
            const value2 = document.getElementById("value2").value;
            const outputDiv = document.getElementById("output");

            try {
                const result = expect(value1).toBe(value2);
                outputDiv.textContent = JSON.stringify(result);
            } catch (error) {
                outputDiv.textContent = error.message;
            }
        });

        document.getElementById("btn-notToBe").addEventListener("click", function () {
            const value1 = document.getElementById("value1").value;
            const value2 = document.getElementById("value2").value;
            const outputDiv = document.getElementById("output");

            try {
                const result = expect(value1).notToBe(value2);
                outputDiv.textContent = JSON.stringify(result);
            } catch (error) {
                outputDiv.textContent = error.message;
            }
        });
  