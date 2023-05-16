Algoritmo "realEmDolar"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 29/03/2023
Var
// Seção de Declarações das variáveis 
   r, realEmDolar, valorConvertido: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...
   realEmDolar <- 3.45
   Escreva("Quantos reais você possui? ")
   Leia(r)
   valorConvertido <- r*realEmDolar
   Escreval("Com R$ ", r:1:2, " você pode comprar US$ ", valorConvertido:1:2)

Fimalgoritmo