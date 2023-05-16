Algoritmo "MEDIA FINAL"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 25/03/2023
Var
// Seção de Declarações das variáveis 
   n1, n2: inteiro
   media: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   Escreva ("Informe a primeira nota do aluno: ")
   Leia (n1)
   Escreva ("Informe a segunda nota do aluno: ")
   Leia (n2)
   media <- (n1+n2)/2
   Se (media >= 7) entao
      Escreva ("A média final do aluno foi", media, " e o aluno foi APROVADO!")
   Senao
      Escreva ("A média final do aluno foi", media, " e infelizmente o aluno foi REPROVADO!")
   FimSe

Fimalgoritmo