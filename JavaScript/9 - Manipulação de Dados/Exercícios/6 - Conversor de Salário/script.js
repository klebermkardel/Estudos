/*

Conversor de Salário para Inteiro: 

Um banco de dados de vagas precisa receber salários apenas como números inteiros. Dado o salário decimal const salarioDolar = 5250.85, use um método do objeto Math para arredondá-lo para baixo (chão) e exiba o resultado.

*/


const salariosDolar = ["5250.85", "3216.56", "7750.32"];

salariosDolar.forEach((salario, index) => {
    // 1. Converte a string para número e força o arredondamento para baixo (chão)
    const salarioInteiro = Math.floor(Number(salario));
    
    // 2. Formata para a moeda americana (Dólar)
    const salarioFormatado = salarioInteiro.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    
    // 3. Exibe o log usando o index + 1 correto
    console.log(`Salário da vaga ${index + 1}: ${salarioFormatado}`);
});