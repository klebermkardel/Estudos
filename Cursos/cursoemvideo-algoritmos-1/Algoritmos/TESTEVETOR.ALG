Algoritmo "TesteVetor"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Antonio Carlos Nicolodi 
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 28/03/2023
Var
// Se��o de Declara��es das vari�veis 
   v: vetor[1..6] de inteiro
   c: inteiro

Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc... 
   Para c <- 1 ate 6 faca
        Escreva ("Digite o", c, "� valor: ")
        leia(v[c])
   FimPara
   Para c <- 1 ate 6 faca
        Escreva ("[", v[c], "]")
   FimPara
Fimalgoritmo