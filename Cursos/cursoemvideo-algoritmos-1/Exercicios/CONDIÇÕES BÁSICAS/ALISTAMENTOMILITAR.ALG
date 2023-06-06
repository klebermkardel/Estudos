Algoritmo "alistamentomilitar"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 30/03/2023
Var
// Seção de Declarações das variáveis 
   idade, iObg, tRes, tExc : inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   iObg <- 18
   Escreva("Informe a sua idade: ")
   Leia(idade)
   tRes <- iObg - idade
   tExc <- idade - iObg
   Se(idade < 18) entao
            Escreval("Ainda faltam", tRes, " anos para você se alistar!")
   senao
            Escreval("Você já passou", tExc, " anos da idade para o alistamento obrigatório!")
   FimSe
Fimalgoritmo