// Aprovação de Empréstimo: Peça o salário de uma pessoa e o valor da prestação de um empréstimo.
// A prestação não pode ser maior que 30% do salário. Informe se o empréstimo foi aprovado ou não.

// Importa a biblioteca para entrada de dados.
const prompt = require('prompt-sync')();

// Exibe o título do programa.
console.log("\n--- Aprovação de Empréstimo ---");

// Cria um formatador de moeda para o Real (BRL) para exibir os valores de forma profissional.
const FORMATADOR_MOEDA = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
});

// --- ENTRADA E TRATAMENTO DE DADOS ---
// Pede ao usuário o salário, o valor total do empréstimo e o número de parcelas.
const SALARIO_DIGITADO = prompt("Informe o seu salário: ");
const VALOR_EMPRESTIMO_DIGITADO = prompt("Informe o valor total do empréstimo: ");
const NUMERO_PARCELAS_DIGITADO = prompt("Em quantas parcelas? ");

// Para os valores monetários, limpamos a string (removendo '.' de milhar e trocando ',' por '.')
// antes de converter para o tipo Number.
const SALARIO = Number(SALARIO_DIGITADO.replace(/\./g, "").replace(',', '.'));
const VALOR_EMPRESTIMO = Number(VALOR_EMPRESTIMO_DIGITADO.replace(/\./g, "").replace(',', '.'));
// O número de parcelas é convertido diretamente para Number.
const NUMERO_PARCELAS = Number(NUMERO_PARCELAS_DIGITADO);

// --- BLOCO DE VALIDAÇÃO ---
// Esta é uma validação completa que verifica todas as entradas. Se qualquer condição for
// verdadeira, o programa exibe um erro e para.
if (isNaN(SALARIO) || isNaN(VALOR_EMPRESTIMO) || isNaN(NUMERO_PARCELAS) || 
    SALARIO <= 0 || VALOR_EMPRESTIMO <= 0 || 
    !Number.isInteger(NUMERO_PARCELAS) || NUMERO_PARCELAS <= 0) {
    
    console.log("Erro: Por favor, digite valores válidos para todos os campos.");

} else {
    // --- BLOCO DE LÓGICA PRINCIPAL ---
    // Este código só é executado se todas as entradas forem válidas.

    // Calcula o valor de cada prestação.
    const PRESTACAO = VALOR_EMPRESTIMO / NUMERO_PARCELAS;
    // Calcula o limite da prestação (30% do salário).
    const LIMITE_APROVACAO = SALARIO * 0.30;
    
    // Declara a variável que guardará o status final.
    let situacaoEmprestimo;

    // A regra de negócio principal: a prestação pode ser no máximo 30% do salário.
    // Comparamos o valor da prestação calculada com o limite permitido.
    if (PRESTACAO <= LIMITE_APROVACAO) {
        situacaoEmprestimo = "Aprovado";
    } else {
        situacaoEmprestimo = "Reprovado";
    }

    // --- SAÍDA FINAL ---
    // Exibe um resumo claro da análise para o usuário, com todos os valores formatados.
    console.log(`\nSalário:                      ${FORMATADOR_MOEDA.format(SALARIO)}`);
    console.log(`Valor do empréstimo solicitado: ${FORMATADOR_MOEDA.format(VALOR_EMPRESTIMO)}`);
    console.log(`Limite de aprovação (30%):    ${FORMATADOR_MOEDA.format(LIMITE_APROVACAO)}`);
    console.log(`Valor da prestação:           ${FORMATADOR_MOEDA.format(PRESTACAO)} (${NUMERO_PARCELAS}x)`);
    console.log(`Situação do empréstimo:       ${situacaoEmprestimo}`);
}