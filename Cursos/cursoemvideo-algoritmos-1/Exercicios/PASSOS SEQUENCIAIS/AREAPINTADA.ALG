Algoritmo "areaPintada"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Antonio Carlos Nicolodi 
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 29/03/2023
Var
// Se��o de Declara��es das vari�veis 
   A, L, areaTotal, qtdTinta: real

Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc... 
   Escreva("Informe a altura da parede (em metros): ")
   Leia(A)
   Escreva("Informe a largura da parede (em metros): ")
   Leia(L)
   areaTotal <- A * L
   qtdTinta <- 1*(areaTotal/2)
   Escreval("�rea total:", areaTotal, " m2")
   Escreval("Quantidade de tinta necess�ria:", qtdTinta, "L")

Fimalgoritmo