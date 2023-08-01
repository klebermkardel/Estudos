/* Fundamentos - 
Armazenando Dados (Declarando variáveis e 
atribuindo valores a elas) */

// var nome = "valor"
// = (1 símbolo de = significa atribuição)

var minhaVariavel = "Olá, mundo!";

console.log(minhaVariavel);

// Comentários de linha

/* Bloco de Comentários 
em mais linhas */

// Variáveis e Tipos de Dados

// String
var minhaString = "Isso é uma string"
console.log(minhaString); 
console.log(typeof minhaString);

// Number
var meuNumero = 10;
console.log(meuNumero);
console.log(meuNumero + 5);
console.log(typeof meuNumero);

// Boolean
var booleano = true; // ou false;
console.log(booleano);
console.log(typeof booleano);


// Object, Array, Null

// Objeto
var meuObjeto = {
    nome: "Kleber",
    idade: 27,
    peso: 103.0,
    altura: 1.75
};
console.log(meuObjeto);
console.log(typeof meuObjeto);

// Array
var meuArray = [0, 1, 2, 3, 4, 5];
console.log(meuArray);
console.log(typeof meuArray);


// Null
var meuNull = null; // Geralmente utilizado para iniciar variáveis onde os valores serão alterados durante o projeto
console.log(meuNull);
console.log(typeof meuNull);

// Undefined
var meuUndefined = undefined;
console.log(meuUndefined);
console.log(typeof meuUndefined);

// let e const
// Novas formas de declarar variáveis
let x = 10; // variável que muda de valor, substitui o var
const y = 5; // variável que n muda o valor ao decorrer do código
console.log(typeof x);
console.log(x, y);