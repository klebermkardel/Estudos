Algoritmo "FIBONACCIPROCEDIMENTO"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 28/03/2023
Var
// Seção de Declarações das variáveis 
   I, T1, T2, T3: inteiro
   Procedimento ProximoFibonacci(var N1, N2: inteiro)
   Var
      N3: inteiro
   Inicio
         N3 <- N1 + N2
         Escreval (N3)
         N1 <- N2
         N2 <- N3
   FimProcedimento

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   T1 <- 0
   Escreval (T1)
   T2 <- 1
   Escreval (T2)
   Para I de 3 ate 10 faca
        ProximoFibonacci(T1, T2)
   FimPara
Fimalgoritmo