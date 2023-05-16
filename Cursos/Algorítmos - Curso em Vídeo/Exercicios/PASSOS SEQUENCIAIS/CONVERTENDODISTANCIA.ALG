Algoritmo "convertendodistancia"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 29/03/2023
Var
// Seção de Declarações das variáveis 
   metros: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   Escreva("Digite uma distância percorrida em metros: ")
   Leia(metros)
   Escreval("A distância de", metros, " corresponde a: ")
   Escreval(metros/1000, "Km                 ", metros*10, "dm")
   Escreval(metros/100, "Hm                  ", metros*100:1:1, "cm")
   Escreval(metros/10, "Dam                  ", metros*1000:1:1, "mm")

Fimalgoritmo