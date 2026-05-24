// ====== DADOS BRUTOS DO SISTEMA ======
const empresasFoco = ["Google", "Amazon", "Microsoft", "Netflix"];
let filaCandidaturas = ["Vaga Hotmart", "Vaga Itáu"];

// Pontos por arremesso nos últimos 3 treinos (0 = erro, 2 ou 3 = acerto)
const treino1 = [2, 0, 3, 0];
const treino2 = [3, 2, 0, 2];
const treino3 = [0, 0, 0, 3];
// ======================================

console.log("=== INICIANDO DASHBOARD ===\n");

// 1 - AUTOMAÇÃO DE CANDIDATURAS
// Percorre a lista de empresas e adiciona apenas as duas primeiras no início da fila
for (let i = 0; i < empresasFoco.length; i++) {
    if (i < 2) {
        filaCandidaturas.unshift(empresasFoco[i]);
    }
}
console.log("Fila de Candidaturas Atualizada:", filaCandidaturas);
console.log("------------------------------------------");


// 2 - SCANNER DE VAGAS
// Varde a fila procurando especificamente por oportunidades estratégicas
for (let i = 0; i < filaCandidaturas.length; i++) {
    if (filaCandidaturas[i] === "Google") {
        console.log("🚨 ATENÇÃO: Preparar portfólio! Vaga do Google encontrada!");
    } else {
        console.log("Vaga comum: [" + filaCandidaturas[i] + "]");
    }
}
console.log("------------------------------------------");


// 3 - LIMPEZA DA FILA
// Simula o envio de currículos removendo os itens de trás para frente até esvaziar o array
while (filaCandidaturas.length > 0) {
    const vagaCandidatada = filaCandidaturas.pop();
    console.log("Currículo enviado para: [" + vagaCandidatada + "]");
}
console.log("------------------------------------------");


// 4 - ANALISTA DE PERFORMANCE METÓDICO
// Agrupa todos os treinos em uma única coleção utilizando o Operador Spread (...)
const todosOsTreinos = [...treino1, ...treino2, ...treino3];

let totalPontos = 0;
let erros = 0;

// Calcula a somatória de acertos e falhas do dia
for (let i = 0; i < todosOsTreinos.length; i++) {
    if (todosOsTreinos[i] > 0) {
        totalPontos += todosOsTreinos[i];
    } else {
        erros++;
    }
}

// Avalia o desempenho do dia através de um Operador Ternário
const metaPontosAtingida = totalPontos >= 12 
    ? "Status do dia: Meta de pontos atingida! 🏀" 
    : "Status do Dia: Treinar mais amanhã.";

// Exibe o relatório final consolidado
console.log("Total de Acertos (Pontos): " + totalPontos);
console.log("Total de Erros (Arremessos): " + erros);
console.log(metaPontosAtingida);
console.log("\n=== DASHBOARD FINALIZADO ===");