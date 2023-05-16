Algoritmo "Tabuada"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 27/03/2023
Var
// Seção de Declarações das variáveis 
   cont, n, res: inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   cont <- 1
   Escreva ("Quer ver a tabuada de qual número? ")
   Leia (n)
   Repita
         res <- n * cont
         EscrevaL (n, " X", cont, " = ", res)
         cont <- cont + 1
   Ate (cont > 10)

Fimalgoritmo