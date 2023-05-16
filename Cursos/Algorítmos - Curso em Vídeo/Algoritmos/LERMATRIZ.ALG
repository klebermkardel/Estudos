Algoritmo "lerMatrix"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 29/03/2023
Var
// Seção de Declarações das variáveis 
   m: vetor[1..3, 1..2] de inteiro
   l, c: inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   Para l <- 1 ate 3 faca
        Para c <- 1 ate 2 faca
             Escreva ("Digite o valor da posição [", l, ",", c, "]: ")
             Leia (m[l, c])
        FimPara
   FimPara
   
   Para l <- 1 ate 3 faca
        Para c <- 1 ate 2 faca
             Escreva (m[l,c])
        FimPara
        Escreval ()
   FimPara

Fimalgoritmo