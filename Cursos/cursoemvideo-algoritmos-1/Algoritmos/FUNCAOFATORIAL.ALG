Algoritmo "FUNCAOFATORIAL"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 28/03/2023
Var
// Seção de Declarações das variáveis 
   N, F: inteiro

   Funcao fatorial(V: inteiro): inteiro
   Var
      C, R: inteiro
   Inicio
         R <- 1
         Para C <- 1 ate V  faca
              R <- R * C
         FimPara
         Retorne R
   FimFuncao

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   Escreva ("Digite um número: ")
   Leia (N)
   F <- fatorial(N)
   Escreval ("O valor de", N, "! é igual a", F)
Fimalgoritmo