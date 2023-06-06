Algoritmo "emprestimo"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 25/03/2023
Var
// Seção de Declarações das variáveis 
   valor, valorTotal: real
   parcelas: inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   Escreva ("Qual o valor do empréstimo? ")
   Leia (valor)
   valorTotal <- valor + (valor*20)/100
   Escreva ("Quantas parcelas? ")
   Leia (parcelas)
   Escreva ("Então vou pagar", parcelas, " parcelas de R$ ", valorTotal/parcelas:4:2)

Fimalgoritmo