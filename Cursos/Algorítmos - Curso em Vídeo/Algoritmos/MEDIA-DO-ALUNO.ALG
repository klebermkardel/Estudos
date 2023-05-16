Algoritmo "media-do-aluno"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 26/03/2023
Var
// Seção de Declarações das variáveis 
    n1, n2, media: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   Escreva ("Primeira Nota: ")
   Leia (n1)
   Escreva ("Segunda Nota: ")
   Leia (n2)
   media <- (n1+n2)/2
   Escreval ("A média do aluno foi ", media:4:2)
   Se (media >= 7) entao
      Escreval ("O aluno foi aprovado")
   senao
        Se (media >= 5) e (media < 7) entao
           Escreval ("O aluno ficou em recuperação")
        Senao
           Escreval ("O aluno foi reprovado")
        FimSe
   FimSe
Fimalgoritmo
