Algoritmo "precocomdesconto"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 29/03/2023
Var
// Seção de Declarações das variáveis 
   preco, desc: real


Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   Escreva("Informe o valor do produto (R$): ")
   Leia(preco)
   desc <- preco - (preco * 5 / 100)
   Escreval("Valor total: R$ ", preco:1:2)
   Escreval("Valor com 5% de desconto: R$ ", desc:1:2)

Fimalgoritmo