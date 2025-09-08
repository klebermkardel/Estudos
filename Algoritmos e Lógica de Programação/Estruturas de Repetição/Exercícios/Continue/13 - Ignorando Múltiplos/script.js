// Ignorando Múltiplos: Use um laço for para imprimir os números de 1 a 30.
// No entanto, se o número for um múltiplo de 3 (ex: 3, 6, 9), use continue para não imprimi-lo.

// --- LAÇO FOR ---
// O laço é configurado para iterar com a variável 'i' de 1 até 30, inclusive.
for (let i = 1; i <= 30; i++) {

    // --- CONDIÇÃO DE DESVIO ---
    // A cada iteração, verificamos se o número atual 'i' é um múltiplo de 3.
    // Isso é feito checando se o resto da divisão de 'i' por 3 é igual a 0.
    if (i % 3 === 0) {
        
        // Se a condição for verdadeira, o comando 'continue' é executado.
        // 'continue' interrompe a iteração ATUAL e pula imediatamente
        // para a próxima iteração do laço (o próximo 'i++').
        continue;
    }
    
    // --- SAÍDA ---
    // Esta linha só será alcançada se a condição 'if' acima for FALSA.
    // Ou seja, o número só é impresso se ele NÃO for um múltiplo de 3.
    console.log(i);
}