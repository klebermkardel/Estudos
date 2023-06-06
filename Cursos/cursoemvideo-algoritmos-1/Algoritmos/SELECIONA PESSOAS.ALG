Algoritmo "SELECIONA PESSOAS"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 27/03/2023
Var
// Seção de Declarações das variáveis 
   sexo, op: caractere
   idade, cabelo, totH18, totM25: inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   Repita
      LimpaTela
      Escreval ("==============================")
      Escreval ("      SELETOR DE PESSOAS      ")
      Escreval ("===============================")
      Escreva ("Qual o sexo da pessoa? [M/F] ")
      Leia (sexo)
      Escreva ("Qual da idade da pessoa? ")
      Leia (idade)
      Escreval ("Qual a cor do cabelo da pessoa? ")
      Escreval ("-------------------------------")
      Escreval ("[1] Preto")
      Escreval ("[2] Castanho")
      Escreval ("[3] Loiro")
      Escreval ("[4] Ruivo")
      Leia (cabelo)
      Se (sexo = "M") e (idade > 18) e (cabelo = 2) entao
         totH18 <- totH18 + 1
      FimSe
      Se (sexo = "F") e (idade >= 25) e (idade <= 30) e (cabelo = 3) entao
         totM25 <- totM25 + 1
      FimSe
      Escreval ("Quer continuar? [S/N] ")
      Leia (op)
   Ate (op = "N")
   LimpaTela
   Escreval ("----------------------------------")
   Escreval ("         RESULTADO FINAL          ")
   Escreval ("----------------------------------")
   EscrevaL("Total de homens com mais de 18 e cabelos castanhos:", TotH18)
   EscrevaL("Total de mulheres entre 25 e 30 e cabelos loiros:", TotM25)
Fimalgoritmo