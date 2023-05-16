Algoritmo "SoComC"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 28/03/2023
Var
// Seção de Declarações das variáveis 
   nome: caractere
   soC: vetor[1..10] de caractere
   c, tot: inteiro
Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   tot <- 0
   Para c <- 1 ate 10 faca
        Escreva ("Digite um nome: ")
        Leia (nome)
        Se (copia(maiusc(nome), 1, 1) = "C") entao
           tot <- tot + 1
           soC[tot] <- nome
        FimSe
   FimPara
   LimpaTela
   
   Escreval ("    LISTAGEM FINAL    ")
   Escreval ("----------------------")
   Para c <- 1 ate tot faca
        Escreval (SoC[c])
   FimPara
Fimalgoritmo