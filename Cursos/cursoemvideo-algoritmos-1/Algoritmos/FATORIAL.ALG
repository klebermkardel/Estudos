Algoritmo "fatorial"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 27/03/2023
Var
// Seção de Declarações das variáveis 
   c, n, f: inteiro
   r: caractere
Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   Repita
      Escreva ("Digite um número para calcular seu fatorial: ")
      Leia (n)
      c <- n
      f <- 1
      Repita
            f <- f * c
            c <- c-1
      Ate (c < 1)
   Escreval ("O valor do fatorial de", N, " é", f)
   Escreva ("Quer continuar? [S/N] ")
   Leia (r)
   LimpaTela
   Ate (r = "N")
Fimalgoritmo