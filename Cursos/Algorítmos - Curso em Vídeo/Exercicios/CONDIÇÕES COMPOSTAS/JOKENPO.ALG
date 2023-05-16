Algoritmo "JOKENPO"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 31/03/2023
Var
// Seção de Declarações das variáveis
   opcao_jogador1, opcao_jogador2: inteiro
   nome_opcao_jogador1, nome_opcao_jogador2: caractere
Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   Escreval("Bem-vindo ao jogo de JoKenPo!")
   Escreval("Jogador 1 - Escolha sua opção:")
   Escreval("1 - Pedra")
   Escreval("2 - Papel")
   Escreval("3 - Tesoura")
   Leia(opcao_jogador1)
   Escreval("Jogador 2 - Escolha sua opção:")
   Escreval("1 - Pedra")
   Escreval("2 - Papel")
   Escreval("3 - Tesoura")
   Leia(opcao_jogador2)
   
   Se (opcao_jogador1 = 1) entao
      nome_opcao_jogador1 <- "Pedra"
   senao
        Se (opcao_jogador1 = 2) entao
            nome_opcao_jogador1 <- "Papel"
        senao
             Se (opcao_jogador1 = 3) entao
               nome_opcao_jogador1 <- "Tesoura"
             FimSe
        FimSe
   FimSe
   
   Se (opcao_jogador2 = 1) entao
      nome_opcao_jogador2 <- "Pedra"
   senao
        Se (opcao_jogador2 = 2) entao
            nome_opcao_jogador2 <- "Papel"
        senao
             Se (opcao_jogador2 = 3) entao
               nome_opcao_jogador2 <- "Tesoura"
             FimSe
        FimSe
   FimSe
   
   Se (opcao_jogador1 = opcao_jogador2) entao
      Escreval("Empate!")
   senao
     Se (opcao_jogador1 = 1) e (opcao_jogador2 = 3) entao
        Escreval("Jogador 1 venceu!")
     senao
       Se (opcao_jogador1 = 2) e (opcao_jogador2 = 1) entao
          Escreval("Jogador 1 venceu!")
       senao
         Se (opcao_jogador1 = 3) e (opcao_jogador2 = 2) entao
            Escreval("Jogador 1 venceu!")
         senao
              Escreval("Jogador 2 venceu!")
         FimSe
       FimSe
     FimSe
   FimSe

Fimalgoritmo