Algoritmo "realEmDolar"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Antonio Carlos Nicolodi 
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 29/03/2023
Var
// Se��o de Declara��es das vari�veis 
   r, realEmDolar, valorConvertido: real

Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc...
   realEmDolar <- 3.45
   Escreva("Quantos reais voc� possui? ")
   Leia(r)
   valorConvertido <- r*realEmDolar
   Escreval("Com R$ ", r:1:2, " voc� pode comprar US$ ", valorConvertido:1:2)

Fimalgoritmo