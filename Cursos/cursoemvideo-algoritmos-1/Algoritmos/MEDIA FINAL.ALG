Algoritmo "MEDIA FINAL"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Antonio Carlos Nicolodi 
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 25/03/2023
Var
// Se��o de Declara��es das vari�veis 
   n1, n2: inteiro
   media: real

Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc... 
   Escreva ("Informe a primeira nota do aluno: ")
   Leia (n1)
   Escreva ("Informe a segunda nota do aluno: ")
   Leia (n2)
   media <- (n1+n2)/2
   Se (media >= 7) entao
      Escreva ("A m�dia final do aluno foi", media, " e o aluno foi APROVADO!")
   Senao
      Escreva ("A m�dia final do aluno foi", media, " e infelizmente o aluno foi REPROVADO!")
   FimSe

Fimalgoritmo