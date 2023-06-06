Algoritmo "contador"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 26/03/2023
Var
// Seção de Declarações das variáveis 
   valor, salto, contador: inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   contador <- 0
   Escreva ("Quer contar até quanto? ")
   leia (valor)
   Escreva ("Qual será o valor do salto? ")
   leia (salto)
   Enquanto (contador <= valor) faca
            Escreval (contador)
            contador <- contador + salto
   FimEnquanto

Fimalgoritmo