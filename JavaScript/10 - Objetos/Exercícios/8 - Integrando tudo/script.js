/*

O MVP da Temporada (Desafio das Estrelas): 

Dado um array com dados de vários jogadores:


const elenco = [
    { nome: "Lucas", pontosPorJogo: 18 },
    { nome: "Kleber", pontosPorJogo: 25 },
    { nome: "Gabriel", pontosPorJogo: 14 }
];

Crie uma lógica utilizando o método .reduce() para encontrar qual é o objeto do jogador que possui a maior quantidade de pontosPorJogo (o MVP) e exiba o nome dele na tela.

*/

// Array contendo as estatísticas de performance dos atletas
const elenco = [
    { nome: "Lucas", pontosPorJogo: 18 },
    { nome: "Kleber", pontosPorJogo: 25 },
    { nome: "Gabriel", pontosPorJogo: 14 }
]

// REDUCE: Compara os objetos entre si para filtrar o que tem a maior propriedade 'pontosPorJogo'
const mvp = elenco.reduce((campeao, desafiante) => {
    // Avalia se o jogador atual da iteração superou o maior pontuador até aqui
    if (desafiante.pontosPorJogo > campeao.pontosPorJogo) {
        return desafiante; // Substitui o campeão pelo novo maior pontuador
    }
    return campeao // Mantém o campeão atual na próxima rodada de comparação
})

// Exibe o nome e a pontuação do objeto vencedor
console.log(`O MVP da temporada foi o ${mvp.nome} com ${mvp.pontosPorJogo} pontos!`)