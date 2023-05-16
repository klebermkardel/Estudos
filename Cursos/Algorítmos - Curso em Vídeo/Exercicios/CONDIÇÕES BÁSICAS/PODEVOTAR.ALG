Algoritmo "podevotar"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 30/03/2023
Var
// Seção de Declarações das variáveis 
   nome: caractere
   idade, ano, nasc: inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   Escreva("Digite o nome da pessoa: ")
   Leia(nome)
   Escreva("Digite o ano atual: ")
   Leia(ano)
   Escreva("Digite o ano de nascimento da pessoa: ")
   Leia(nasc)
   idade <- ano - nasc
   Se (idade >= 18) entao
      Escreval(nome, " tem", idade, " anos e seu voto é obrigatório!")
   senao
        Escreval(nome, " tem menos de 18 anos e ainda não pode votar!")
   FimSe
Fimalgoritmo