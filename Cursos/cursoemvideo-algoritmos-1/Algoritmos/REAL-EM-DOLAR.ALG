Algoritmo "real-em-dolar"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Antonio Carlos Nicolodi 
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 25/03/2023
Var
// Se��o de Declara��es das vari�veis 
   c, q: inteiro
   reais, dolares: real

Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc... 
   c <- 1
   Escreva ("Quantas vezes voc� quer conventer? ")
   Leia (q)
   Enquanto (c <= q) faca
            Escreva ("Quantos reais eu tenho? ")
            Leia (reais)
            dolares <- reais / 5.25
            Escreval ("O valor convertido � US$:", dolares)
            c <- c+1
   FimEnquanto
Fimalgoritmo