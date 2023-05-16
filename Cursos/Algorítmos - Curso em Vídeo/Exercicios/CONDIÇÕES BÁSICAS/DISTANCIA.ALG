Algoritmo "distancia"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 30/03/2023
Var
// Seção de Declarações das variáveis 
   d, preco, pFinal: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   Escreva("Informe a distância (em Km): ")
   Leia(d)
   Se(d <= 200) entao
        preco <- 0.50
        pFinal <- d * preco
        Escreval("Distância percorrida: ", d, "Km")
        Escreval("Valor Final: R$ ", pFinal:1:2)
   senao
        preco <- 0.45
        pFinal <- d * preco
        Escreval("Distância percorrida: ", d, "Km")
        Escreval("Valor Final: R$ ", pFinal:1:2)
   FimSe

Fimalgoritmo