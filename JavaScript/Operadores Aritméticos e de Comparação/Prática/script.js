/* Prática: Criando uma "Calculadora" de Rotina no Console

   Vamos aplicar o que foi aprendido nesse tópico ao seu dia a dia. Imagine que você quer calcular o tempo de treino ou o progresso nos estudos. Teste esses comentandos;

*/

// Calculadora de treino de basquete
const tempoTreinoMinutos = 30
const sessoesPorSemana = 5
const totalMinutosMes = (tempoTreinoMinutos * sessoesPorSemana) * 4

console.log("Minutos treinados por mês:", totalMinutosMes)

// Comparador de Metas
const metaMinutos = 500
const aintigiuMeta = totalMinutosMes >= metaMinutos

console.log("Atingiu a meta mensal?", aintigiuMeta)

// Teste da igualdade estrita
console.log("O número 600 é igual ao texto '600'?")
console.log(600 == '600')
console.log(600 === '600')

console.log(1 + 2)