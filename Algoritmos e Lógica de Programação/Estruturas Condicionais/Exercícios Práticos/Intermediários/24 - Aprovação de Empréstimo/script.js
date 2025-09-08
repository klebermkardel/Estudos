// Aprovação de Empréstimo: Peça o salário de uma pessoa e o valor da prestação de um empréstimo. A prestação não pode ser maior que 30% do salário. Informe se o empréstimo foi aprovado ou não.

const prompt = require('prompt-sync')();

console.log("\n--- Aprovação de Empréstimo ---");

const FORMATADOR_MOEDA = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
});


const SALARIO_DIGITADO = prompt("Informe o seu salário: ");
const VALOR_EMPRESTIMO_DIGITADO = prompt("Informe o valor total do empréstimo: ");
const NUMERO_PARCELAS_DIGITADO = prompt("Em quantas parcelas? ")

const SALARIO = Number(SALARIO_DIGITADO.replace(/\./g, "").replace(',', '.'));
const VALOR_EMPRESTIMO = Number(VALOR_EMPRESTIMO_DIGITADO.replace(/\./g, "").replace(',', '.'));
const NUMERO_PARCELAS = Number(NUMERO_PARCELAS_DIGITADO);


if(isNaN(SALARIO) || isNaN(VALOR_EMPRESTIMO) || isNaN(NUMERO_PARCELAS) || SALARIO <= 0 || VALOR_EMPRESTIMO <= 0 || !Number.isInteger(NUMERO_PARCELAS) || NUMERO_PARCELAS <= 0) {
    console.log("Erro: Por favor, digite valores válidos para todos os campos.");
} else {
    const PRESTACAO = VALOR_EMPRESTIMO / NUMERO_PARCELAS;
    const LIMITE_APROVACAO = SALARIO * 0.30;
    let situacaoEmprestimo;

    if(PRESTACAO <= LIMITE_APROVACAO) {
        situacaoEmprestimo = "Aprovado";
    } else {
        situacaoEmprestimo = "Reprovado";
    }

    console.log(`\nSalário: ${FORMATADOR_MOEDA.format(SALARIO)}`);
    console.log(`Valor do empréstimo solicitado: ${FORMATADOR_MOEDA.format(VALOR_EMPRESTIMO)}`);
    console.log(`Limite de aprovação (30%): ${FORMATADOR_MOEDA.format(LIMITE_APROVACAO)}`);
    console.log(`Valor da prestação: ${FORMATADOR_MOEDA.format(PRESTACAO)}`);
    console.log(`Situação do empréstimo: ${situacaoEmprestimo}`);
}


