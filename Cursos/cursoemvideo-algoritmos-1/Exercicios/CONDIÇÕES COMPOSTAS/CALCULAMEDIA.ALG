Algoritmo "CALCULAMEDIA"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Antonio Carlos Nicolodi 
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 31/03/2023
Var
// Se��o de Declara��es das vari�veis 
   n1, n2, media: real

Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc... 
   Escreva("Digite a primeira nota: ")
   Leia(n1)
   Escreva("Digite a segunda nota: ")
   Leia(n2)
   media <- (n1+n2)/2
   Se (media < 5) entao
      Escreval("M�dia Final: ", media:1:1)
      Escreval("Infelizmente voc� foi reprovade!")
   senao
     Se (media >= 5) e (media < 7) entao
        Escreval("M�dia Final: ", media:1:1)
        Escreval("Voc� ficou de recupera��o!")
     senao
        Escreval("M�dia Final: ", media:1:1)
        Escreval("Parab�ns, voc� foi aprovade!")
     FimSe
   FimSe

Fimalgoritmo