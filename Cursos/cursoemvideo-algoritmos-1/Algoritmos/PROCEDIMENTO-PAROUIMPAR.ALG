Algoritmo "procedimento-parouimpar"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 27/03/2023
Var
// Seção de Declarações das variáveis 
   N: Inteiro
   Procedimento ParOuImpar(V: Inteiro)
   Inicio
         Se (V % 2 = 0) entao
            Escreval ("O número", V, " é par!")
         senao
              Escreval ("O número", V, " é ímpar!")
         FimSe
   FimProcedimento
Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   Escreva ("Digite um número: ")
   Leia (N)
   ParOuImpar(N)
Fimalgoritmo