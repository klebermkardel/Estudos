Algoritmo "distancia"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Antonio Carlos Nicolodi 
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 30/03/2023
Var
// Se��o de Declara��es das vari�veis 
   d, preco, pFinal: real

Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc... 
   Escreva("Informe a dist�ncia (em Km): ")
   Leia(d)
   Se(d <= 200) entao
        preco <- 0.50
        pFinal <- d * preco
        Escreval("Dist�ncia percorrida: ", d, "Km")
        Escreval("Valor Final: R$ ", pFinal:1:2)
   senao
        preco <- 0.45
        pFinal <- d * preco
        Escreval("Dist�ncia percorrida: ", d, "Km")
        Escreval("Valor Final: R$ ", pFinal:1:2)
   FimSe

Fimalgoritmo