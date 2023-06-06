Algoritmo "adivinhacao"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 31/03/2023
Var
// Seção de Declarações das variáveis
   numSorteado, palpite: inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...

   numSorteado <- randi(6)
   escreval("Tente adivinhar o número sorteado (entre 1 e 5): ")
   leia(palpite)

   Se (palpite = numSorteado) entao
      Escreval("Parabéns, você acertou!")
   senao
     Se (palpite <> numSorteado) entao
        Escreval("Poxa, você errou! O número sorteado foi: ", numSorteado)
        FimSe
   FimSe

Fimalgoritmo