Algoritmo "alistamentomilitar"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Antonio Carlos Nicolodi 
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 30/03/2023
Var
// Se��o de Declara��es das vari�veis 
   idade, iObg, tRes, tExc : inteiro

Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc... 
   iObg <- 18
   Escreva("Informe a sua idade: ")
   Leia(idade)
   tRes <- iObg - idade
   tExc <- idade - iObg
   Se(idade < 18) entao
            Escreval("Ainda faltam", tRes, " anos para voc� se alistar!")
   senao
            Escreval("Voc� j� passou", tExc, " anos da idade para o alistamento obrigat�rio!")
   FimSe
Fimalgoritmo