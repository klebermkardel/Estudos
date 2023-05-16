Algoritmo "ANALISADORDENOMES"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 28/03/2023
Var
// Seção de Declarações das variáveis 
   N: caractere

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   Escreva ("Digite o seu nome: ")
   Leia (N)
   Escreval("O total de letras no seu nome é", compr(N))
   Escreval (copia(N, 3, 3))
   Escreval (maiusc(N))
   Escreval (minusc(N))
   Escreval (pos("ber", N))

Fimalgoritmo