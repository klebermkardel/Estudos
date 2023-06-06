Algoritmo "real-em-dolar"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 25/03/2023
Var
// Seção de Declarações das variáveis 
   c, q: inteiro
   reais, dolares: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   c <- 1
   Escreva ("Quantas vezes você quer conventer? ")
   Leia (q)
   Enquanto (c <= q) faca
            Escreva ("Quantos reais eu tenho? ")
            Leia (reais)
            dolares <- reais / 5.25
            Escreval ("O valor convertido é US$:", dolares)
            c <- c+1
   FimEnquanto
Fimalgoritmo