Algoritmo "alugueldecarros"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 29/03/2023
Var
// Seção de Declarações das variáveis 
   qtdDias: inteiro
   valorPorDia, valorPorKm, Km, totValDia, totValKm, valorFinal: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   valorPorDia <- 90.00
   valorPorKm <- 0.20
   Escreva("Informe a quantidade de dias: ")
   Leia(qtdDias)
   Escreva("Informe quantos Kms foram rodados: ")
   Leia(Km)
   totValDia <- qtdDias * valorPorDia
   totValKm <- Km * valorPorKm
   valorFinal <- totValDia + totValKm
   Escreval()
   Escreval("     VALORES    ")
   Escreval("----------------")
   Escreval()
   Escreval("Quantidade de dias:", qtdDias)
   Escreval("Kms rodados: ", Km:1:2, "Km")
   Escreval("Total pelas diárias: R$ ", totValDia:1:2)
   Escreval("Total por Km rodado: R$ ", totValKm:1:2)
   Escreval("Valor final: R$ ", valorFinal:1:2)
   

Fimalgoritmo