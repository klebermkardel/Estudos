Algoritmo "aproveitamentodoaluno"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 26/03/2023
Var
// Seção de Declarações das variáveis 
   n1, n2: inteiro
   media: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   Escreva ("Primeira Nota: ")
   Leia (n1)
   Escreva ("Segunda Nota: ")
   Leia (n2)
   media <- (n1+n2)/2
   Escreval ("A média do aluno foi", media)
   Se (media <= 10) e (media >= 9) entao
      Escreval ("O desempenho do aluno foi nota A")
   senao
        Se (media < 9) e (media >= 8) entao
           Escreval ("O desempenho do aluno foi nota B")
        senao
             Se (media < 8) e (media >= 7) entao
                Escreval ("O desempenho do aluno foi nota C")
             senao
                  Se (media < 7) e (media >= 6) entao
                     Escreval ("O desempenho do aluno foi nota D")
                  senao
                       Se (media < 6) e (media >= 5) entao
                          Escreval ("O desempenho do aluno foi nota E")
                       senao
                            Escreval ("O desempenho do aluno foi nota F")
                       FimSe
                  FimSe
             FimSe
        FimSe
   FimSe

Fimalgoritmo