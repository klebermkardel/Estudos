Algoritmo "MULTA"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 29/03/2023
Var
// Seção de Declarações das variáveis 
   v, vE, valMulta: real


Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   Escreva("Informe a velocidade do veículo: ")
   Leia(v)
   Se (v > 80) entao
      vE <- v - 80
      valMulta <- vE * 5
      Escreval("Você ultrapassou a velocidade máxima! MULTADO")
      Escreval("O valor da multa é de R$ ", valMulta)
   FimSe
   


Fimalgoritmo