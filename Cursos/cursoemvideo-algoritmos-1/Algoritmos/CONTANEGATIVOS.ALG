Algoritmo "contaNegativos"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 27/03/2023
Var
// Seção de Declarações das variáveis 
   n, c, totN: inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   c <- 1
   TotN <- 0
   Repita
         Escreva ("Digite um número: ")
         Leia (n)
         Se (n < 0) entao
            totN <- totN + 1
         FimSe
         c <- c + 1
   Ate (c > 5)
   Escreval ("O total de números negativos é:", totN)
Fimalgoritmo