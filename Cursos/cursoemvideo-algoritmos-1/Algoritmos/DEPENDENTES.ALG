Algoritmo "DEPENDENTES"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 26/03/2023
Var
// Seção de Declarações das variáveis 
   nome: caractere
   sal, nSal: real
   dep: inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   Escreva ("Qual o nome do funcionário? ")
   Leia (nome)
   Escreva ("Qual o salário do funcionário? ")
   Leia (sal)
   Escreva ("Qual a quantidade de dependentes? ")
   Leia (dep)
   Escolha dep
           Caso 0
                nSal <- sal + (sal*5/100)
           Caso 1, 2, 3
                nSal <- sal + (sal*10/100)
           Caso 4, 5, 6
                nSal <- sal + (sal*15/100)
           OutroCaso
                nSal <- sal + (sal*18/100)
   FimEscolha
   Escreval ("O novo salário de ", nome, " será de R$", nSal:5:2)
Fimalgoritmo