Algoritmo "semnome"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 31/03/2023
Var
// Seção de Declarações das variáveis 
   nome: caractere
   t: inteiro
   sal, nSal: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   Escreva("Digite o nome do funcionário: ")
   Leia(nome)
   Escreva("Informe o seu salário base: ")
   Leia(sal)
   Escreva("Quanto tempo está na empresa: ")
   leia(t)
   Se(t < 3) entao
        nSal <- sal + (sal*3/100)
        Escreval("Novo salário: R$ ", nSal:1:2)
   senao
     Se (t >= 3) e (t < 10) entao
        nSal <- sal + (sal*12.5/100)
        Escreval("Novo salário: R$ ", nSal:1:2)
     senao
          nSal <- sal + (sal*20/100)
          Escreval("Novo salário: R$ ", nSal:1:2)
     FimSe
   FimSe

Fimalgoritmo