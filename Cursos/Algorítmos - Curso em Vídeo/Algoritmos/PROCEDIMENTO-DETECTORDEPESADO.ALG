Algoritmo "semnome"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 27/03/2023
Var
// Seção de Declarações das variáveis 
   I: inteiro
   N, pesado: caractere
   P, Mai: real
Procedimento Topo()
Inicio
   LimpaTela
   Escreval ("---------------------------------")
   Escreval (" D E T E C T O R D E P E S A D O ")
   Escreval (" Maior peso até agora:", Mai, "Kg")
   Escreval ("---------------------------------")
FimProcedimento
Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   Topo()
   Para I <- 1 ate 5 faca
        Escreva ("Digite o nome: ")
        Leia (N)
        Escreva ("Digite o peso de ", N, ": ")
        Leia (P)
        Se (P > Mai) entao
           Mai <- P
           pesado <- N
        FimSe
        Topo()
   FimPara
   Topo()
   Escreval ("A pessoa mais pesada foi ", pesado, " com ", Mai, "Kg")
Fimalgoritmo