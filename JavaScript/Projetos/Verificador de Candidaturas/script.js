/*

Projeto 2: Verificador de Candidaturas (Operadores)
Foco: Operadores aritméticos e de comparação.

O Desafio: Criar uma lógica para saber o quão perto você está de bater a meta de vagas aplicadas no dia.

Requisitos:

Defina uma meta diária de vagas (ex: 8).

Defina quantas você já aplicou.

Calcule a porcentagem de conclusão.

Crie uma variável booleana que armazena se a meta foi atingida ou não (usando >=).

Exiba o resultado: "Meta atingida? [true/false]".

*/

// Resolução:

// Declaração de variáveis

const metaDiaria = 10
const vagasAplicadas = 5

// Calculo do progresso com base em quantas vagas foram aplicadas e quantas precisam para atingir a meta diária
const progressoDoDia = (vagasAplicadas / metaDiaria) * 100

// Verifica se a meta foi atingida com base no resultado do progresso
const metaAtingida = progressoDoDia >= 100 ? "Sim" : "Não"

// Exibe no console se a meta foi atingida ou não
console.log("Você se candidatou no momento à " + progressoDoDia + "% da meta de vagas do dia. Meta atingida? " + metaAtingida)