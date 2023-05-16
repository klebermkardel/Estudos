Algoritmo "vetornumerospares"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 28/03/2023
Var
// Seção de Declarações das variáveis 
   v: vetor[1..7] de inteiro
   c, pares: inteiro
Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   pares <- 0
   Para c <- 1 ate 7 faca
        Escreva ("Digite o", c, "º valor: ")
        Leia (v[c])
   FimPara

   Para c <- 1 ate 7 faca
       Se (v[c] % 2 = 0) entao
          pares <- pares + 1
          Escreval ("Valor par na posição", c)
       FimSe
   FimPara
   Escreval ("Quantidade de números pares:", pares)
Fimalgoritmo