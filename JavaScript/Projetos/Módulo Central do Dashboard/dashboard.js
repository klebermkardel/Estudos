/*

O Desafio: Módulo Central do Dashboard

Você recebeu três conjuntos de dados brutos e desalinhados. Sua missão é criar um único script que processe esses dados, limpe as inconsistências, faça os cálculos matemáticos e exiba relatórios profissionais e formatados no console.

Crie um arquivo chamado dashboard.js dentro de uma pasta de projetos e encare os 3 submódulos abaixo:

Parte 1: Tratamento de Candidaturas de Emprego (.map, .filter, .trim)

A API do sistema buscou vagas de "Dev Júnior", mas os textos vieram cheios de espaços em branco e letras misturadas. Além disso, algumas vagas de "Pleno" e "Estágio" entraram de penetra na lista.

Dado Bruto:


const vagasRecebidas = [
    "   DEV jÚnIoR  ",
    " dev pleno ",
    "DEV JÚNIOR   ",
    "  ESTAGIÁRIO ",
    "   dev júnior"
];

O que fazer:

1. Use os métodos de string (.trim() e .toUpperCase()) e o .map() para padronizar todas as strings da lista em letras maiúsculas e sem espaços nas pontas.

2. Use o .filter() para reter no array apenas as vagas que sejam exatamente "DEV JÚNIOR".

3. Exiba no console o array final limpo e a quantidade de vagas válidas encontradas.

Parte 2: Auditoria de Performance no Treino (.reduce, Math)

O sensor da quadra registrou as pontuações dos seus arremessos em strings por erro de leitura de um hardware antigo. Além disso, precisamos achar o recorde do dia e a média de pontos.

Dado Bruto:


const pontosConvertidos = ["12", "18", "8", "24", "15"];

O que fazer:

1. Use o .map() combinando com Number() para transformar esse array de strings em um array de números legítimos.

2. Use o .reduce() para encontrar a maior pontuação (seu recorde).

3. Use outro .reduce() para somar todos os pontos e, dividindo pelo tamanho do array (.length), calcule a média de pontos por treino.

4. Formate a média para exibir apenas uma casa decimal usando o .toFixed(1).

Parte 3: Simulador de Orçamento Financeiro de Estudos (Method Chaining, toLocaleString, Math.abs)

O sistema registrou o balanço financeiro dos seus investimentos em cursos e assinaturas de plataformas tech. Valores positivos são depósitos de bolsas/ajudas, valores negativos são gastos.

Dado Bruto:

const transacoesEstudos = [-80.50, 200.00, -45.00, -120.90, 50.00];

O que fazer:

1. Crie uma esteira de métodos encadeados (.filter().reduce()) para isolar apenas os valores negativos (gastos) e somá-los.

2. Pegue esse resultado final negativo, transforme-o em positivo usando o Math.abs().

3. O grande toque final: Exiba esse valor na tela formatado como moeda brasileira real (R$) usando o método totalGasto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }).
*/

// Parte 1 - RELATÓRIO DE VAGAS DISPONÍVEIS

function saidaDoTerminal(texto) {
    console.log("\n")
    console.log("=========================================")
    console.log(texto)
    console.log("=========================================")
}

saidaDoTerminal("RELATÓRIO DE VAGAS DISPONÍVEIS")

const vagasRecebidas = [
    "   DEV jÚnIoR  ",
    " dev pleno ",
    "DEV JÚNIOR   ",
    "  ESTAGIÁRIO ",
    "   dev júnior"
]

const vagasFiltradas = vagasRecebidas.map(vaga => vaga.trim().toUpperCase()).filter(vaga => vaga === "DEV JÚNIOR")

console.log("Vagas filtradas: " + vagasFiltradas.join(", "))
console.log("Total de oportunidades de Dev Júnior: " + vagasFiltradas.length)

// Parte 2 - ANÁLISE DE PERFORMANCE EM QUADRA

saidaDoTerminal("ANÁLISE DE PERFORMANCE EM QUADRA")

const pontosConvertidos = ["12", "18", "8", "24", "15"]

const pontosFormatados = pontosConvertidos.map(ponto => Number(ponto))

const maiorPontuacao = pontosFormatados.reduce((acc, valorAtual) => valorAtual > acc ? valorAtual : acc, 0)

const mediaDePontosPorTreino = pontosFormatados.reduce((acc, valorAtual) => acc + valorAtual, 0) / pontosFormatados.length

console.log("Sua maior pontuação (Recorde): " + maiorPontuacao + " pontos.")
console.log("Sua média de pontuação hoje: " + mediaDePontosPorTreino.toFixed(1) + " pontos perante os treinos." )

// Parte 3 - BALANÇO FINANCEIRO DE ESTUDOS

saidaDoTerminal("BALANÇO FINANCEIRO DE ESTUDOS")

const transacoesEstudos = [-80.50, 200.00, -45.00, -120.90, 50.00]

const totalGasto = transacoesEstudos.filter(transacao => transacao < 0).reduce((acc, valorAtual) => acc + valorAtual, 0)

console.log("Invesimento total na sua carreira: " + Math.abs(totalGasto).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'}))