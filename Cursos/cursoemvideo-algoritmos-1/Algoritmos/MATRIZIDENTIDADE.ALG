Algoritmo "matrizIdentidade"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 29/03/2023
Var
// Seção de Declarações das variáveis 
   mID: vetor[1..3, 1..3] de inteiro
   i, j: inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   Para i <- 1 ate 3 faca
        Para j <- 1 ate 3 faca
             Se (i = j) entao
                mID[i,j] <- 1
             senao
                  mID[i,j] <-0
             FimSe
        FimPara
   FimPara
   
   Para i <- 1 ate 3 faca
        Para j <- 1 ate 3 faca
             Escreva (mID[i,j]:3)
        FimPara
        Escreval()
   FimPara

Fimalgoritmo