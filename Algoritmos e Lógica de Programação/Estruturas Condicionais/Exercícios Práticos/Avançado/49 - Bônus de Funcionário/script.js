// Verifique a elegibilidade para um bônus com base no tempo de casa OU no valor de vendas.

// Importa a biblioteca 'prompt-sync' para entrada de dados.
const prompt = require('prompt-sync')();

// Exibe um título para o programa.
console.log("\n--- Verificador de Bônus de Funcionário ---");

// Pede ao usuário o tempo de casa e o valor das vendas, convertendo ambos para o tipo Number.
const tempoDeCasa = Number(prompt("Tempo de casa (anos): "));
const vendas = Number(prompt("Valor de vendas no último ano: R$ "));

// --- BLOCO DE VALIDAÇÃO ---
// Garante que ambas as entradas sejam números e não sejam negativas.
if (isNaN(tempoDeCasa) || isNaN(vendas) || tempoDeCasa < 0 || vendas < 0) {
    console.log("Erro: Por favor, informe valores numéricos e positivos.");
} else {
    // --- BLOCO DE LÓGICA PRINCIPAL ---
    
    // Esta é a condição principal. A regra de negócio exige que o funcionário atenda
    // a PELO MENOS UMA das duas condições, por isso usamos o operador 'OU' (||).
    // 1. tempoDeCasa > 5: O funcionário tem mais de 5 anos na empresa?
    // OU (||)
    // 2. vendas > 50000: O funcionário vendeu mais de R$ 50.000?
    if (tempoDeCasa > 5 || vendas > 50000) {
        // Se pelo menos uma das condições for verdadeira, este bloco é executado.
        console.log("Parabéns! Você é elegível para o bônus.");
    } else {
        // Se AMBAS as condições forem falsas, este bloco é executado.
        console.log("Infelizmente, você não atende aos critérios para o bônus este ano.");
    }
}