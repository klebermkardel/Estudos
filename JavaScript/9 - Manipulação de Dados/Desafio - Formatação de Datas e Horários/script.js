/*

Desafio de Fixação da Data

Crie uma função chamada gerarTimestamp() que não recebe nenhum parâmetro. Quando ela for chamada, ela deve ler a data atual do sistema e imprimir no console uma string exatamente nesse formato (simulando o log de um sistema):

[LOG 26/05/2026 - 11:12:20] -> O sistema está rodando.

*/

function gerarTimestamp() {
    const dataAtual = new Date()

    console.log(`[LOG ${dataAtual.toLocaleDateString('pt-BR')} - ${dataAtual.toLocaleTimeString('pt-BR')}] -> O sistema está rodando.`)
}

gerarTimestamp()