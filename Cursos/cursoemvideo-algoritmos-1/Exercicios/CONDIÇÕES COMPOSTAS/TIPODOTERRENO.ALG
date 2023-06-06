Algoritmo "TIPODOTERRENO"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 31/03/2023
Var
// Seção de Declarações das variáveis 
   l, c, m2: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   Escreva("Informe a largura do terreno: ")
   Leia(l)
   Escreva("Informe o comprimento do terreno: ")
   Leia(c)
   m2 <- l * c
   Se (m2 < 100) entao
      Escreval("Tamanho do Terreno: ", m2, "m2")
      Escreval("Terreno Popular")
   senao
     Se (m2 >= 100) e (m2 <= 500) entao
        Escreval("Tamanho do Terreno: ", m2, "m2")
        Escreval("Terreno Master")
     senao
          Escreval("Tamanho do Terreno: ", m2, "m2")
          Escreval("Terreno VIP")
     FimSe
   FimSe

Fimalgoritmo