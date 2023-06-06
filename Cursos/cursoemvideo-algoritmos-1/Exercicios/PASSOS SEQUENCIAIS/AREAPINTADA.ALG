Algoritmo "areaPintada"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 29/03/2023
Var
// Seção de Declarações das variáveis 
   A, L, areaTotal, qtdTinta: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   Escreva("Informe a altura da parede (em metros): ")
   Leia(A)
   Escreva("Informe a largura da parede (em metros): ")
   Leia(L)
   areaTotal <- A * L
   qtdTinta <- 1*(areaTotal/2)
   Escreval("Área total:", areaTotal, " m2")
   Escreval("Quantidade de tinta necessária:", qtdTinta, "L")

Fimalgoritmo