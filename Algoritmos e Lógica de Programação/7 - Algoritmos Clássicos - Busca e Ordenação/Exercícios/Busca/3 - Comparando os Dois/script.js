// Comparando a Eficiência: Modifique as duas funções para retornarem também o número de passos. Teste com um array grande e compare o desempenho.

const prompt = require('prompt-sync')();

// --- FUNÇÕES MODIFICADAS (COM CONTADOR DE PASSOS) ---

function buscaLinearComContador(array, alvo) {
    let passos = 0;
    for (let i = 0; i < array.length; i++) {
        passos++; // Incrementa o passo a cada comparação
        if (array[i] === alvo) {
            return { indice: i, passos: passos }; // Retorna um objeto com os resultados
        }
    }
    return { indice: -1, passos: passos };
}

function buscaBinariaComContador(array, alvo) {
    let passos = 0;
    let inicio = 0;
    let fim = array.length - 1;

    while (inicio <= fim) {
        passos++; // Incrementa o passo a cada "chute" no meio
        const meio = Math.floor((inicio + fim) / 2);
        const chute = array[meio];

        if (chute === alvo) {
            return { indice: meio, passos: passos };
        } else if (chute < alvo) {
            inicio = meio + 1;
        } else {
            fim = meio - 1;
        }
    }
    return { indice: -1, passos: passos };
}

// --- SCRIPT PRINCIPAL ---
console.log("\n--- Comparativo de Desempenho: Busca Linear vs. Binária ---");

// Criamos um array grande e ordenado para o teste (de 1 a 1000).
const arrayGrande = [];
for (let i = 1; i <= 1000; i++) {
    arrayGrande.push(i);
}

const alvo = Number(prompt("Digite um número de 1 a 1000 para encontrar: "));

if (isNaN(alvo) || alvo < 1 || alvo > 1000) {
    console.log("Erro: Por favor, digite um número válido no intervalo.");
} else {
    // Executa e armazena os resultados de ambas as buscas.
    const resultadoLinear = buscaLinearComContador(arrayGrande, alvo);
    const resultadoBinario = buscaBinariaComContador(arrayGrande, alvo);

    console.log("\n--- Resultados ---");
    
    // Busca Linear
    console.log("Busca Linear:");
    if (resultadoLinear.indice !== -1) {
        console.log(`   - Encontrado no índice: ${resultadoLinear.indice}`);
        console.log(`   - Passos necessários: ${resultadoLinear.passos}`);
    } else {
        console.log("   - Não encontrado.");
    }
    
    // Busca Binária
    console.log("\nBusca Binária:");
    if (resultadoBinario.indice !== -1) {
        console.log(`   - Encontrado no índice: ${resultadoBinario.indice}`);
        console.log(`   - Passos necessários: ${resultadoBinario.passos}`);
    } else {
        console.log("   - Não encontrado.");
    }
}