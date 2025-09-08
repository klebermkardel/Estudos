// Crie um programa que receba a nota de um aluno e exiba "Aprovado" se a nota for maior ou igual a 7,
// "Recuperação" se for maior ou igual a 5 e menor que 7, e "Reprovado" se for menor que 5.

// Importa a biblioteca 'prompt-sync' para permitir a entrada de dados pelo usuário.
const prompt = require('prompt-sync')();

// Pede a nota ao usuário. Usamos parseFloat() em vez de Number() ou parseInt()
// porque é a função mais explícita para converter um texto em um número com casas decimais (ponto flutuante).
// Por padrão, ela espera um ponto como separador decimal (ex: 7.5).
const nota = parseFloat(prompt("Informe a nota do aluno: "));

// Imprime uma linha em branco para espaçamento e melhor legibilidade.
console.log("");

// --- BLOCO DE VALIDAÇÃO ---
// Verificamos se a conversão para número falhou. Se o usuário digitou "texto",
// parseFloat() retornará NaN (Not a Number), e isNaN(nota) será verdadeiro.
// Nota: Uma validação mais completa poderia checar se a nota está entre 0 e 10.
if (isNaN(nota)) {
    console.log("Erro: Por favor, digite um número válido.");
} else {
    // --- BLOCO DE LÓGICA PRINCIPAL ---
    // Este bloco só é executado se a entrada for um número válido.
    // Usamos uma cadeia if...else if...else, que é a estrutura ideal para múltiplas faixas de valores.

    // 1ª Verificação: Checamos a condição mais alta primeiro.
    if (nota >= 7) {
        console.log("Aprovado!");
    } 
    // 2ª Verificação: Este código só é executado se a primeira condição (nota >= 7) for FALSA.
    // Portanto, aqui nós já sabemos que a nota é MENOR que 7.
    // Por isso, não precisamos escrever 'nota >= 5 && nota < 7', basta 'nota >= 5'.
    else if (nota >= 5) {
        console.log("Recuperação.");
    } 
    // 3ª Verificação: Se a nota não for >= 7 e também não for >= 5,
    // a única possibilidade que resta é que ela seja menor que 5.
    // O 'else' final captura todos os casos restantes.
    else {
        console.log("Reprovado.");
    }
}