// Peça um dia da semana por extenso e informe se é dia útil ou final de semana.

// Importa a biblioteca 'prompt-sync' para a entrada de dados.
const prompt = require('prompt-sync')();

// Exibe um título para o programa.
console.log("\n--- Verificador de Final de Semana ---");

// Pede ao usuário que digite o dia da semana. A entrada é uma string.
const dia = prompt("Digite o dia da semana (ex: segunda, sábado): ");

// --- NORMALIZAÇÃO DA ENTRADA ---
// Esta etapa é crucial para a lógica funcionar de forma consistente.
// 1. .trim(): Remove espaços em branco do início e do fim.
// 2. .toLowerCase(): Converte a string inteira para letras minúsculas.
// Isso garante que " Sábado ", "sábado" e "SÁBADO" sejam todos tratados da mesma forma.
const diaNormalizado = dia.trim().toLowerCase();

// Declara a variável que irá armazenar a classificação do dia.
let tipoDeDia;

// --- BLOCO DE LÓGICA PRINCIPAL ---
// A estrutura 'switch' é ideal para comparar uma única variável ('diaNormalizado')
// com uma lista de valores de texto possíveis.
switch (diaNormalizado) {
    // Para o final de semana, usamos uma técnica chamada "fall-through" (queda).
    // Como o 'case "sábado":' não tem um 'break', a execução "cai" para o
    // próximo case ('case "domingo":'), executando o mesmo bloco de código para ambos.
    case "sábado":
    case "domingo":
        tipoDeDia = "Final de Semana";
        // O 'break' aqui finaliza a execução do switch para os casos de final de semana.
        break;
    
    // O mesmo padrão "fall-through" é usado para agrupar todos os dias úteis.
    case "segunda":
    case "terça":
    case "quarta":
    case "quinta":
    case "sexta":
        tipoDeDia = "Dia Útil";
        break;

    // O bloco 'default' é executado se 'diaNormalizado' não corresponder
    // a nenhum dos 'case's acima. Ele serve para tratar erros de digitação ou entradas inesperadas.
    default:
        tipoDeDia = "Entrada Inválida";
        break;
}

// --- SAÍDA FINAL ---
// Exibe a classificação do dia para o usuário.
// Usamos a variável original 'dia' para mostrar exatamente o que o usuário digitou.
console.log(`"${dia}" é considerado: ${tipoDeDia}.`);