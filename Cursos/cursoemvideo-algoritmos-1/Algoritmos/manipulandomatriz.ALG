Algoritmo "semnome"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 29/03/2023
Var
// Seção de Declarações das variáveis 
   mat: vetor[1..4, 1..4] de inteiro
   l, c, sDP, p2L, mai3C: inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...
   sDP <- 0
   p2L <- 1
   Para l <- 1 ate 4 faca
        Para c <- 1 ate 4 faca
             Escreva ("Digite o valor da posição [", l, ",", c, "] :")
             Leia (mat[l,c])
             Se (l = c) entao
                sDP <- sDP + mat[l,c]
             FimSe
        FimPara
   FimPara
   
   Escreval()
   Escreval("Matriz:")
   Escreval("----------------")
   Para l <- 1 ate 4 faca
        Para c <- 1 ate 4 faca
             Escreva (mat[l,c]:3)
        FimPara
        Escreval()
   FimPara
   
   Para c <- 1 ate 4 faca
        p2L <- p2L * mat[2,c]
   FimPara
   
   Para l <- 1 ate 4 faca
        Se (mat[l, 3] > mai3C) entao
           mai3C <- mat[l,c]
        FimSe
   FimPara
   
   Escreval("----------------")
   Escreval()
   Escreval("A soma dos valores da diagonal principal é de:", sDP)
   Escreval("A produto dos valores da Segunda Linha é:", p2L)
   Escreval("O maior valor da terceira coluna é:", mai3C)
Fimalgoritmo