Algoritmo "media-do-aluno"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Antonio Carlos Nicolodi 
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 26/03/2023
Var
// Se��o de Declara��es das vari�veis 
    n1, n2, media: real

Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc... 
   Escreva ("Primeira Nota: ")
   Leia (n1)
   Escreva ("Segunda Nota: ")
   Leia (n2)
   media <- (n1+n2)/2
   Escreval ("A m�dia do aluno foi ", media:4:2)
   Se (media >= 7) entao
      Escreval ("O aluno foi aprovado")
   senao
        Se (media >= 5) e (media < 7) entao
           Escreval ("O aluno ficou em recupera��o")
        Senao
           Escreval ("O aluno foi reprovado")
        FimSe
   FimSe
Fimalgoritmo
