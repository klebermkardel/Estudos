Algoritmo "DEPARTAMENTO DE TRÂNSITO"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 25/03/2023
Var
// Seção de Declarações das variáveis 
   ano, nasc, idade: inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   Escreva ("Digite o ano atual: ")
   Leia (ano)
   Escreva ("Digite o ano do seu nascimento: ")
   Leia (nasc)
   idade <- ano - nasc
   Se (idade >= 18) entao
      Escreva ("Você tem", idade, " anos e já pode dirigir")
   Senao
      Escreva ("Você tem", idade, " e ainda não pode dirigir")
   FimSe

Fimalgoritmo