/*

Prática: Aplicando à sua rotina

Vamos transformar aquela lógica de metas que criamos na revisão da Semana 1 em uma linha de código muito mais limpa

*/

const metaEstudosHoras = 2
let horasEstudadas = 1

// Usando o Ternário
const statusMeta = horasEstudadas >= metaEstudosHoras ? "Meta Atingida" : "Ainda falta estudar"

console.log(statusMeta) // Resultado: "Ainda falta estudar"
