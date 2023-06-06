Algoritmo "SOMADOR"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 26/03/2023
Var
// Seção de Declarações das variáveis
  cont, N, S, maior, menor: inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...
   S <- 0
   cont <- 1
   Enquanto (cont <= 5) faca
            Escreva("Digite o ", cont, "o. número: ")
            Leia(N)
            Se (cont = 1) entao
               maior <- N
               menor <- N
            Senao
                 Se (N > maior) entao
                    maior <- N
                 FimSe
                 Se (N < menor) entao
                    menor <- N
                 FimSe
            FimSe
            S <- S + N
            cont <- cont + 1
   FimEnquanto
   Escreval ("Soma:", S)
   Escreval ("Maior valor:", maior)
   Escreval ("Menor valor:", menor)
Fimalgoritmo