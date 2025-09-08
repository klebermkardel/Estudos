// Classifique a urgência de um paciente com base na temperatura e pressão.

// Importa a biblioteca 'prompt-sync' para entrada de dados.
const prompt = require('prompt-sync')();

// Exibe um título para o programa.
console.log("\n--- Triagem Médica ---");

// Pede ao usuário a temperatura e a pressão arterial, convertendo-as para o tipo Number.
const temperatura = Number(prompt("Temperatura (°C): "));
const pressao = Number(prompt("Pressão Arterial (mmHg): "));

// --- BLOCO DE VALIDAÇÃO ---
// Garante que a temperatura e a pressão sejam números positivos e válidos.
if (isNaN(temperatura) || isNaN(pressao) || temperatura <= 0 || pressao <= 0) {
    console.log("Erro: Informe valores numéricos e positivos para temperatura e pressão.");
} else {
    // --- BLOCO DE LÓGICA PRINCIPAL ---

    // Declara a variável que irá armazenar a urgência da triagem.
    let urgencia;

    // A cadeia 'if...else if...else' é usada para classificar a urgência,
    // sempre começando pela condição mais crítica.

    // 1ª Verificação: A condição mais grave (Emergência) exige que as duas condições sejam
    // verdadeiras ao mesmo tempo, por isso usamos o 'E' (&&).
    if (temperatura > 37 && pressao > 140) {
        urgencia = "Emergência 🚨";
    } 
    // 2ª Verificação: Se a primeira condição for falsa, checamos a condição 'Urgente'.
    // Esta condição exige que pelo menos UMA (||) das verificações seja verdadeira.
    else if (temperatura > 37 || pressao > 140) {
        urgencia = "Urgente ⚠️";
    } 
    // 3ª Verificação: Se nenhuma das condições anteriores for verdadeira,
    // significa que a temperatura e a pressão estão dentro da faixa normal.
    else {
        urgencia = "Não Urgente ✅";
    }

    // --- SAÍDA FINAL ---
    // Exibe o resultado da triagem de forma clara para o usuário.
    console.log(`\nCom temperatura de ${temperatura}°C e pressão de ${pressao}mmHg, a triagem é: ${urgencia}`);
}