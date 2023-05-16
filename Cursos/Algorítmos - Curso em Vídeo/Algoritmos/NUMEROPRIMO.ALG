Algoritmo "numeroprimo"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 27/03/2023
Var
// Seção de Declarações das variáveis 
   c, n, contDiv: inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   c <- 1
   contDiv <- 0
   Escreva ("Digite um número: ")
   Leia (n)
   Repita
         Escreva (c, " ")
         Se (n % c = 0) entao
            contDiv <- contDiv + 1
         FimSe
         c <- c+1
   Ate (c > n)
   Se (contDiv > 2) entao
      Escreva ("O valor", n, "não é número primo!")
   senao
        Escreva ("O valor", n, "é um número primo!")
   FimSe

Fimalgoritmo