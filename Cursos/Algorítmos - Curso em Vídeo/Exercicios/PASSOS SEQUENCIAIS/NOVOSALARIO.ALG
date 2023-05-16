Algoritmo "novosalario"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 29/03/2023
Var
// Seção de Declarações das variáveis 
   nome: caractere
   sal, nSal: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   Escreva("Digite o nome do funcionário: ")
   Leia(nome)
   Escreva("Informe o salário do funcionário: ")
   Leia(sal)
   nSal <- sal + (sal * 15 / 100)
   Escreval("Salário atual: R$ ", sal:1:2)
   Escreval("A partir do próximo mês o salário de ", nome, " será de R$ ", nSal:1:2)

Fimalgoritmo