Algoritmo "salarionomes"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 29/03/2023
Var
// Seção de Declarações das variáveis 
   qtdDias: inteiro
   valorPorH, valorPorDia, salNoMes: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   ValorPorH <- 25.00
   Escreva("Informe a quantidade de dias trabalhos no mês: ")
   Leia(qtdDias)
   valorPorDia <- 8 * valorPorH
   salNoMes <- qtdDias*valorPorDia

   Escreval("Quantidade de dias trabalhados no mês:", qtdDias)
   Escreval("Salário no mês:", salNoMes)

Fimalgoritmo