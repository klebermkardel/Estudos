let nome, sal, nSal, dep

nome = prompt("Qual o nome do funcionário? ")
sal = parseFloat(prompt("Qual o salário do funcionário? "))
dep = parseInt(prompt("Qual é a quantidade de dependentes? "))

switch(dep) {
    case 0:
        nSal = sal + (sal*5/100)
        break
    case 1, 2, 3:
        nSal = sal + (sal*10/100)
        break
    case 4, 5, 6:
        nSal = sal + (sal*15/100)
        break
    default:
        nSal = sal + (sal*18/100)
        break
}

alert(`Nome do funcionário: ${nome}\nSalário atual: R$ ${sal.toFixed(2)}\nQuantidade de Dependentes: ${dep}\nNovo Salário: R$ ${nSal.toFixed(2)}`)