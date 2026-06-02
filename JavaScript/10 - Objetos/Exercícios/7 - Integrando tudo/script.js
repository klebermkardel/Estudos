/*

Extrato de Matrículas: 

Crie um objeto chamado historicoVagas. Ele deve ter um array chamado inscricoes, onde cada objeto tem o id da vaga, o titulo e a dataInscricao (um objeto new Date()). Adicione um método que exiba no console um relatório legível de todas as inscrições usando o toLocaleDateString('pt-BR') para cada data.

*/

const historicoVagas = {
    inscricoes: [
        { id: 1, titulo: "Dev Júnior", dataInscricao: new Date() },
        { id: 2, titulo: "Dev Pleno", dataInscricao: new Date() },
        { id: 3, titulo: "Estágio", dataInscricao: new Date() },
        { id: 4, titulo: "Trainee", dataInscricao: new Date() },
    ],
    // Método que varre a lista interna usando o 'this' e exibe os dados higienizados
    exibirRelatorio: function() {
        this.inscricoes.forEach(inscricao => {
            console.log(`Id da Vaga: ${inscricao.id}\nVaga: ${inscricao.titulo}\nData da Inscrição: ${inscricao.dataInscricao.toLocaleDateString('pt-BR')}\n`);
        });
    }
};

// Executa a impressão do relatório diretamente
historicoVagas.exibirRelatorio();