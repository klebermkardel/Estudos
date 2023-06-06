Algoritmo "CalculoIMC"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 25/03/2023
Var
// Seção de Declarações das variáveis 
   P, A, IMC: Real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   Escreva ("Peso (Kg): ")
   Leia (P)
   Escreva ("Altura (m): ")
   Leia (A)
   IMC <- P/(A^2)
   Escreval ("IMC: ", IMC:5:2)
   Se (IMC < 17) entao
      Escreval ("Muito abaixo do peso")
   senao
        Se (IMC >= 17) e (IMC < 18.5) entao
           Escreval ("Abaixo do peso")
        senao
             Se (IMC >= 18.5) e (IMC < 25) entao
                Escreval ("Peso ideal")
             senao
                  Se (IMC >= 25) e (IMC < 30) entao
                     Escreval ("Sobrepeso")
                  senao
                       Se (IMC >= 30) e (IMC < 35) entao
                          Escreval ("Obesidade")
                       senao
                            Se (IMC >= 35) e (IMC < 40) entao
                               Escreval ("Obesidade Severa")
                            senao
                                 Escreval ("Obesidade Mórbida")
                            FimSe
                       FimSe
                  FimSe
             FimSe
        FimSe
   FimSe

Fimalgoritmo