Algoritmo "reducaodevida"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 29/03/2023
Var
   qtd_cigarros, anos_fumando: inteiro
   dias_perdidos: real
Inicio
   Escreva("Quantos cigarros você fuma por dia? ")
   Leia(qtd_cigarros)

   Escreva("Há quantos anos você fuma? ")
   Leia(anos_fumando)

   dias_perdidos <- (qtd_cigarros * 10 * 365) * anos_fumando / (24 * 60)

   Escreva("Você perderá ", dias_perdidos:1:0, " dias de vida por causa do cigarro.")
FimAlgoritmo