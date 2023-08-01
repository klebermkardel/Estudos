// Fundamentos - Operadores

let x = 10;
const y = 5;

console.log("Operadores Aritméticos");

// Operadores Aritméticos
console.log(x + y); // Soma
console.log(x - y); // Subtração
console.log(x * y); // Multiplicação
console.log(x / y); // Divisão
console.log(x % y); // Módulo
console.log(x ** y); // Exponenciação
console.log(++x); // Incremento
console.log(--x); // Decremento

console.log("-------------------");

console.log("Operadores de Comparação");

// Operadores de Comparação
console.log(x == y); // Compara se valor é igual (retorna false)
console.log(x != y); // Compara se valores são diferentes (retorna true)
console.log("5" === 5); // Compara se valor e tipo de dados são iguais (retorna false)
console.log("5" !== 5); // Compara se valores e tipos de dados são diferentes (retorna true)


console.log("-------------------");

console.log("Operadores Lógicos");

// Operadores Lógicos

console.log("Operador AND");

// Operador AND (&&) retorna true se as duas ou mais condições são verdadeiras
console.log(10 > 5 && 20 > 5) // Retorna true
console.log(10 > 5 && 20 < 5) // retorna false 
console.log(10 < 5 && 20 < 5) // retorna false 


console.log("Operador OR");

//Operador OR (||) retorna true se pelo menos uma condição for verdadeira
console.log(10 > 5 || 20 > 5) // Retorna true
console.log(10 < 5 || 20 > 5) // retorna true 
console.log(10 < 5 || 20 < 5) // retorna false

console.log("-------------------");
