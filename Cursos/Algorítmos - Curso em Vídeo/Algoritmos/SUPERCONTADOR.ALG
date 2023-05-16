Algoritmo "SUPERCONTADOR"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 27/03/2023
Var
// Seção de Declarações das variáveis 
   op, cont: inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   Repita
         EscrevaL("")
         EscrevaL("=================")
         EscrevaL("|    M E N U    |")
         EscrevaL("=================")
         EscrevaL("| [1] De 1 a 10 |")
         EscrevaL("| [2] De 10 a 1 |")
         EscrevaL("| [3] Sair      |")
         EscrevaL("=================")
         Leia (op)
         Escolha op
                 Caso 1
                      cont <- 1
                      Repita
                            Escreva (cont, "..")
                            cont <- cont + 1
                      Ate (cont > 10)
                 Caso 2
                      cont <- 10
                      Repita
                            Escreva (cont, "..")
                            cont <- cont - 1
                      Ate (cont < 1)
                 Caso 3
                      Escreval ("SAINDO...")
                 Caso 4, 5, 6, 7, 8, 9, 0
                      Escreval ("INVÁLIDO!")
         FimEscolha
   Ate (op = 3)

Fimalgoritmo