let valorEmprestimo, totPagar, juros, qtdParcelas, valorParcelas

valorEmprestimo = parseFloat(prompt("Qual valor você deseja pegar? "))

totPagar = valorEmprestimo + (valorEmprestimo * 0.20)

qtdParcelas = parseInt(prompt("Deseja parcelar em quantas vezes? "))

valorParcelas = totPagar / qtdParcelas

alert(`Valor do empréstimo: R$ ${valorEmprestimo.toFixed(2)}\n Valor a pagar: R$ ${totPagar.toFixed(2)}\n Quantidade de Parcelas: ${qtdParcelas}\n Valor das Parcelas: R$ ${valorParcelas.toFixed(2)}`)

