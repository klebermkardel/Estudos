Algoritmo "CALCULAMEDIA"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 30/03/2023
Var
// Seção de Declarações das variáveis 
   nome: caractere
   n1, n2, media: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   Escreva("Digite o nome do aluno: ")
   Leia(nome)
   Escreva("Digite a primeira nota: ")
   Leia(n1)
   Escreva("Digite a segunda nota: ")
   Leia(n2)
   media <- (n1+n2)/2
   Escreval("Média:", media)
   Se (media >= 7) entao
      Escreval("O aluno ", nome, " teve média", media, " e foi aprovado!")
   senao
      Escreval("O aluno ", nome, " ficou abaixo da média e não foi aprovado!")
   FimSe

Fimalgoritmo