Algoritmo "adivinhacao"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Antonio Carlos Nicolodi 
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 31/03/2023
Var
// Se��o de Declara��es das vari�veis
   numSorteado, palpite: inteiro

Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc...

   numSorteado <- randi(6)
   escreval("Tente adivinhar o n�mero sorteado (entre 1 e 5): ")
   leia(palpite)

   Se (palpite = numSorteado) entao
      Escreval("Parab�ns, voc� acertou!")
   senao
     Se (palpite <> numSorteado) entao
        Escreval("Poxa, voc� errou! O n�mero sorteado foi: ", numSorteado)
        FimSe
   FimSe

Fimalgoritmo