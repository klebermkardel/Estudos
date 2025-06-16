/* Dia 01 - Conceitos Básicos de JavaScript */

// Imprime uma mensagem no terminal
console.log("Começando do zero no JavaScript!");

/* 
   Declaração de constantes:
   - Utilizamos 'const' quando o valor não será reatribuído.
   - É uma boa prática dar nomes descritivos às variáveis.
*/

const myName = "Kleber";         // nome do usuário (string)
const age = 29;                  // idade (número inteiro)
const city = "São Paulo";        // cidade onde mora (string)

// Exibe uma frase formatada usando template literals (crase e ${variável})
console.log(`Meu nome é ${myName}, tenho ${age} anos e moro em ${city}`);

/* 
   Operadores Aritméticos:
   Realizam cálculos matemáticos entre valores numéricos
   (+ adição, - subtração, * multiplicação, / divisão)
*/

const number1 = 5;
const number2 = 2;

const soma = number1 + number2;
const subtracao = number1 - number2;
const multiplicacao = number1 * number2;
const divisao = number1 / number2;

// Exibe o resultado de cada operação
console.log(`Soma: ${number1} + ${number2} = ${soma}`);
console.log(`Subtração: ${number1} - ${number2} = ${subtracao}`);
console.log(`Multiplicação: ${number1} x ${number2} = ${multiplicacao}`);
console.log(`Divisão: ${number1} ÷ ${number2} = ${divisao}`);

/* 
   Tipos de Dados:
   - Podemos verificar o tipo de cada valor com o operador typeof
*/

console.log(typeof(myName));     // string
console.log(typeof(age));        // number
console.log(typeof(divisao));    // number (mesmo sendo decimal, é considerado "number")

/*
   Operadores de Comparação:
   Comparam valores e retornam true ou false
   ==  compara apenas o valor
   === compara valor e tipo
   !=  diferente (valor)
   !== diferente (valor e tipo)
   >   maior que
   <   menor que
*/

const numero = "5";  // string

console.log(number1 == numero);     // true (valor é igual: 5 == "5")
console.log(number1 === numero);    // false (valor igual, mas tipos diferentes)
console.log(number1 !== numero);    // true (valores iguais, tipos diferentes)
console.log(number1 > number2);     // true (5 > 2)
console.log(number1 < number2);     // false (5 < 2 é falso)

/* 
   💡 Sugestões de testes extras:
   - Troque os valores de number1 e number2 por outros, como negativos ou decimais.
   - Tente comparar duas strings: ex: "5" === "5"
   - Teste typeof com valores como: true, null, undefined, [] ou {}
*/
