Algoritmo "contadorinteligente"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 26/03/2023
Var
// Seção de Declarações das variáveis 
   i, f, cont: inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   Escreval("CONTAGEM INTELIGENTE")
   Escreval("--------------------")
   Escreva ("Inicio: ")
   Leia(I)
   Escreva ("Fim: ")
   Leia(F)
   Escreval("--------------------")
   Escreval("  C O N T A N D O   ")
   Escreval("--------------------")
   Se (f > i) entao
         cont <- i
         Enquanto (cont <= f) faca
            Escreva (cont, ".. ")
            cont <- cont + 1
         FimEnquanto
      senao
         cont <- i
         Enquanto (cont >= f) faca
            Escreva (cont, ".. ")
            cont <- cont - 1
         FimEnquanto
      FimSe

Fimalgoritmo