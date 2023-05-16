Algoritmo "FORMATRIANGULO"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 31/03/2023
Var
// Seção de Declarações das variáveis
   l1, l2, l3: inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...
   Escreva("Informe o primeiro lado: ")
   Leia(l1)
   Escreva("Informe o segundo lado: ")
   Leia(l2)
   Escreva("Informe o terceiro lado: ")
   Leia(l3)
   Se(l1 < l2 + l3) e (l2 < l1 + l3) e (l3 < l1 + l2) entao
         Escreval("TRIÂNGULO!")
         Se (l1 = l2) e (l2 = l3) e (l3 = l1) entao
            Escreval("Triângulo EQUILÁTERO")
         senao
           Se (l1 = l2) ou (l2 = l3) ou (l3 = l1) entao
              Escreval("Triângulo ISÓSCELES")
           senao
                Escreval("Triângulo ESCALENO")
           FimSe
         FimSe
   senao
        Escreval("Não forma triângulo")
   FimSe
   



Fimalgoritmo