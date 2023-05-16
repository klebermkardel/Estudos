Algoritmo "diadasmulheres"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 30/03/2023
Var
// Seção de Declarações das variáveis 
   s: caractere
   preco, desc, vFinal: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   Escreva("Informe o valor do produto: ")
   Leia(preco)
   Escreva("Informe o seu sexo: ")
   Leia(s)
   Se(s = "H") entao
        desc <- 5
        vFinal <- preco - (preco * desc/100)
        Escreval()
        Escreval("Preço do produto: ", preco)
        Escreval("Valor com desconto: ", vFinal)
   senao Se (s = "M") entao
            desc <- 13
            vFinal <- preco - (preco * desc/100)
            Escreval()
            Escreval("Preço do produto: ", preco)
            Escreval("Valor com desconto: ", vFinal)
   FimSe

   

Fimalgoritmo