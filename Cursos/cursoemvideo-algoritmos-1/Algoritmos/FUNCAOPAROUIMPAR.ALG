Algoritmo "FUNCAOPAROUIMPAR"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 28/03/2023
Var
// Seção de Declarações das variáveis 
   N: inteiro
   R: caractere
   
   Funcao ParOuImpar(V: inteiro): caractere
   Inicio
          Se (V % 2 = 0) entao
             Retorne "PAR"
          senao
               Retorne "ÍMPAR"
          FimSe
   FimFuncao

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   Escreva ("Digite um número: ")
   Leia (N)
   R <- ParOuImpar(N)
   Escreval ("O número digitado é", R)
Fimalgoritmo