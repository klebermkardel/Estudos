Algoritmo "LISTAGEMDATURMA"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 28/03/2023
Var
// Seção de Declarações das variáveis 
   nome: vetor[1..4] de caractere
   n1: vetor[1..4] de real
   n2: vetor[1..4] de real
   media: vetor[1..4] de real
   SM, MT: real
   c, TOT: inteiro
Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   Para c <- 1 ate 4 faca
        Escreval ("Digite o nome do", c, "º aluno: ")
        Leia (nome[c])
        Escreval ("Digite a primeira nota do", c, "º aluno: ")
        Leia (n1[c])
        Escreval ("Digite a segunda nota do", c, "º aluno: ")
        Leia (n2[c])
        media[c] <- (n1[c]+n2[c])/2
        SM <- SM + media[c]
   FimPara
   MT <- SM/4
   LimpaTela
   Escreval ("     LISTAGEM DE ALUNOS      ")
   Escreval ("-----------------------------")
   Para c <- 1 ate 4 faca
        Escreval ("Nome: ", nome[c], " | Média:", media[c])
        Se (media[c] > MT) entao
           Tot <- TOT + 1
        FimSe
   FimPara
   Escreval ("No total temos", TOT, " alunos acima da média da turma que é", MT)
Fimalgoritmo