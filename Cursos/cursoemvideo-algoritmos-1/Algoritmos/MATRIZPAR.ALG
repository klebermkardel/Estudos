Algoritmo "matrizPar"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Antonio Carlos Nicolodi 
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 29/03/2023
Var
// Se��o de Declara��es das vari�veis
   valores: vetor[1..3, 1..3] de inteiro
   l, c, totPar: inteiro

Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc...
   Para l <- 1 ate 3 faca
        Para c <- 1 ate 3 faca
             Escreva ("Digite o valor da posi��o [", l, ",", c, "]: ")
             Leia (valores[l, c])
        FimPara
   FimPara

   Escreval()
   Escreval ("Matriz:")
   Escreval ("---------------")
   totPar <- 0
   Para l <- 1 ate 3 faca
        Para c <- 1 ate 3 faca
             Se (valores[l,c] % 2 = 0) entao
                Escreva ("{", valores[l,c]:2, "}")
                totPar <- totPar + 1
             senao
                Escreva (valores[l,c]:4)
             FimSe
        FimPara
        Escreval ()
   FimPara

   Escreval ("Total de n�meros pares:", totPar)
Fimalgoritmo