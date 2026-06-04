/*

O Sistema de Reajuste Salarial (Base: Variáveis, Condicionais e Strings)

Cenário: Você precisa criar a lógica de um sistema de RH que calcula o aumento dos colaboradores de uma empresa baseado em seus cargos.

1. Crie uma função chamada calcularReajuste(nome, cargo, salarioAtual).

2. A lógica de aumento deve seguir estas regras:

    Se o cargo for "Dev Jr", o aumento é de 15%.

    Se o cargo for "Dev Pleno", o aumento é de 10%.

    Para qualquer outro cargo, o aumento é de 5%.

3. A função deve retornar uma string exatamente assim (substituindo os valores):

"O colaborador [Nome] (Cargos em Maiúsculo) receberá um aumento e seu novo salário será R$ [Novo Salario]"

Dica: Lembre-se de usar .toUpperCase() para o cargo e garantir que o novo salário tenha casas decimais organizadas (pode usar .toFixed(2)).

*/



// Exercício 1: O Sistema de Reajuste Salarial (Base: Variáveis, Condicionais e Strings)
const calcularReajuste = (nome, cargo, salarioAtual) => {
    // Condicional encadeada que avalia a string do cargo para aplicar o multiplicador correto
    if (cargo === "Dev Jr") {
        salarioAtual = salarioAtual * 1.15; // +15%
    } else if (cargo === "Dev Pleno") {
        salarioAtual = salarioAtual * 1.1;  // +10%
    } else {
        salarioAtual = salarioAtual * 1.05; // +5% (Qualquer outro cargo)
    }

    // Retorna a string tratada com o cargo em caixa alta e o salário formatado como moeda brasileira
    return `O colaborador ${nome} (${cargo.toUpperCase()}) receberá um aumento e seu novo salário será de ${salarioAtual.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
};

// Execução dos testes abrangendo todos os cenários da condicional
console.log(calcularReajuste("Kleber", "Dev Jr", 2000));
console.log(calcularReajuste("Victor", "Dev Pleno", 4500));
console.log(calcularReajuste("João", "Dev Sênior", 7000));