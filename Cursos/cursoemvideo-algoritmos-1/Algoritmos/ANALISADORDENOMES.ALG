Algoritmo "ANALISADORDENOMES"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Antonio Carlos Nicolodi 
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 28/03/2023
Var
// Se��o de Declara��es das vari�veis 
   N: caractere

Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc... 
   Escreva ("Digite o seu nome: ")
   Leia (N)
   Escreval("O total de letras no seu nome �", compr(N))
   Escreval (copia(N, 3, 3))
   Escreval (maiusc(N))
   Escreval (minusc(N))
   Escreval (pos("ber", N))

Fimalgoritmo