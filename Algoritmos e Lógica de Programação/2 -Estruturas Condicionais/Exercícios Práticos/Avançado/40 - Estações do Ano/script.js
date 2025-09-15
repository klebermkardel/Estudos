// Exercício 40: Estações do Ano
// Peça um mês e determine a estação do ano.

// Importa a biblioteca 'prompt-sync' para a entrada de dados.
const prompt = require('prompt-sync')();

// Exibe um título para o programa.
console.log("\n--- Determinador de Estação do Ano ---");

// Pede ao usuário o número do mês e o converte para o tipo Number.
const mes = Number(prompt("Digite o número do mês (1-12): "));

// --- BLOCO DE VALIDAÇÃO ---
// Garante que a entrada seja um número inteiro e esteja dentro do intervalo de 1 a 12.
if (isNaN(mes) || !Number.isInteger(mes) || mes < 1 || mes > 12) {
    console.log("Erro: Digite um número de mês válido (1-12).");
} else {
    // --- BLOCO DE LÓGICA PRINCIPAL ---
    
    // Declara a variável que irá armazenar o nome da estação.
    let estacao;

    // A estrutura 'switch' é usada para comparar o 'mes' com os casos definidos.
    switch (mes) {
        // Esta é a técnica "fall-through" (queda).
        // Como não há 'break' no 'case 12' e no 'case 1', a execução "cai"
        // para o 'case 2' e executa o código dele. Isso agrupa os três casos.
        case 12:
        case 1:
        case 2:
            estacao = "Verão ☀️";
            // O 'break' aqui é fundamental para parar a execução e não continuar para 'Outono'.
            break;
        case 3:
        case 4:
        case 5:
            estacao = "Outono 🍂";
            break;
        case 6:
        case 7:
        case 8:
            estacao = "Inverno ❄️";
            break;
        case 9:
        case 10:
        case 11:
            estacao = "Primavera 🌸";
            break;
        // Não há necessidade de um 'default', pois a validação inicial já garante
        // que o número do mês é válido.
    }
    
    // --- SAÍDA FINAL ---
    // Exibe o resultado para o usuário.
    console.log(`O mês ${mes} corresponde à estação: ${estacao}`);
}