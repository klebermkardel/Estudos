Algoritmo "CALCULAMEDIA"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 31/03/2023
Var
// Seção de Declarações das variáveis 
   n1, n2, media: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   Escreva("Digite a primeira nota: ")
   Leia(n1)
   Escreva("Digite a segunda nota: ")
   Leia(n2)
   media <- (n1+n2)/2
   Se (media < 5) entao
      Escreval("Média Final: ", media:1:1)
      Escreval("Infelizmente você foi reprovade!")
   senao
     Se (media >= 5) e (media < 7) entao
        Escreval("Média Final: ", media:1:1)
        Escreval("Você ficou de recuperação!")
     senao
        Escreval("Média Final: ", media:1:1)
        Escreval("Parabéns, você foi aprovade!")
     FimSe
   FimSe

Fimalgoritmo