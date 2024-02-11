/* Escreva uma função expect que ajude os desenvolvedores a testarem seu código. Deve receber qualquer valor val e retornar um objeto com as seguintes duas funções.

toBe(val) aceita outro valor e retorna true se os dois valores === um ao outro. Se eles não forem iguais, deve lançar um erro "Not Equal".
notToBe(val) aceita outro valor e retorna true se os dois valores !== um ao outro. Se eles forem iguais, deve lançar um erro "Equal". */

function expect(val) {
    return {
        // Função que verifica se os dois valores são estritamente iguais (===)
        toBe: function(otherVal) {
            if (val !== otherVal) {
                throw new Error("Not Equal");
            } else {
                return true;
            }
        },
        // Função que verifica se os dois valores são diferentes (!==)
        notToBe: function(otherVal) {
            if (val === otherVal) {
                throw new Error("Equal");
            } else {
                return true;
            }
        }
    };
}

// Exemplo de uso da função expect
try {
    expect(5).toBe(5); // Deve passar
    console.log("5 is equal to 5");
    
    expect(5).notToBe(10); // Deve passar
    console.log("5 is not equal to 10");
    
    expect("hello").toBe("world"); // Deve falhar e lançar um erro
} catch (error) {
    console.error(error.message); // Saída: "Not Equal"
}

try {
    expect("hello").notToBe("hello"); // Deve falhar e lançar um erro
} catch (error) {
    console.error(error.message); // Saída: "Equal"
}
