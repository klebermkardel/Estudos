Algoritmo "FORMATRIANGULO"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Antonio Carlos Nicolodi 
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 30/03/2023
Var
// Se��o de Declara��es das vari�veis 
   l1, l2, l3: inteiro

Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc... 
   Escreva("Informe o primeiro lado: ")
   Leia(l1)
   Escreva("Informe o segundo lado: ")
   Leia(l2)
   Escreva("Informe o terceiro lado: ")
   Leia(l3)
   Se(l1 < l2 + l3) e (l2 < l1 + l3) e (l3 < l1 + l2) entao
         Escreval("TRI�NGULO!")
   senao
        Escreval("N�o forma tri�ngulo")
   FimSe

Fimalgoritmo