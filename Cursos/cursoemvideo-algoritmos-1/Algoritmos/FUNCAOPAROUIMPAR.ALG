Algoritmo "FUNCAOPAROUIMPAR"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Antonio Carlos Nicolodi 
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 28/03/2023
Var
// Se��o de Declara��es das vari�veis 
   N: inteiro
   R: caractere
   
   Funcao ParOuImpar(V: inteiro): caractere
   Inicio
          Se (V % 2 = 0) entao
             Retorne "PAR"
          senao
               Retorne "�MPAR"
          FimSe
   FimFuncao

Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc... 
   Escreva ("Digite um n�mero: ")
   Leia (N)
   R <- ParOuImpar(N)
   Escreval ("O n�mero digitado �", R)
Fimalgoritmo