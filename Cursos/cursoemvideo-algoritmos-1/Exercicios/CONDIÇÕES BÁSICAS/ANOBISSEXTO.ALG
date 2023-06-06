Algoritmo "anobissexto"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 30/03/2023
Var
// Seção de Declarações das variáveis 
   ano: inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   Escreva("Digite o ano desejado: ")
   Leia(ano)
   Se (ano % 4 = 0) e (ano % 100 <> 0) ou (ano % 400 = 0) entao
      Escreval("O ano", ano, " é bissexto")
   senao
      Escreval("O ano", ano, " não é bissexto")
   FimSe

Fimalgoritmo