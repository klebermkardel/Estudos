Algoritmo "salarionomes"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Antonio Carlos Nicolodi 
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 29/03/2023
Var
// Se��o de Declara��es das vari�veis 
   qtdDias: inteiro
   valorPorH, valorPorDia, salNoMes: real

Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc... 
   ValorPorH <- 25.00
   Escreva("Informe a quantidade de dias trabalhos no m�s: ")
   Leia(qtdDias)
   valorPorDia <- 8 * valorPorH
   salNoMes <- qtdDias*valorPorDia

   Escreval("Quantidade de dias trabalhados no m�s:", qtdDias)
   Escreval("Sal�rio no m�s:", salNoMes)

Fimalgoritmo