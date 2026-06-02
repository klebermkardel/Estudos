/*

Lista de Presença do Time: 

Dado um array de objetos onde cada objeto representa um jogador com nome e posicao (ex:Armador, Pivô), use o método .map() para extrair apenas os nomes dos jogadores e exiba na tela uma string única separada por traços (-).

*/

// Array contendo os objetos de cadastro de cada atleta do time
const jogadores = [
    { nome: "Kleber", posicao: "armador"},
    { nome: "João", posicao: "pivô" },
    { nome: "Lucas", posicao: "defensor"}
];

// MAP: Varre o array original e extrai apenas o valor da propriedade 'nome' de cada objeto
const nomeDosJogadores = jogadores.map(jogador => jogador.nome);

// Une o array de nomes resultante em uma única string separada por traços e espaços
console.log(nomeDosJogadores.join(" - "));