/* 

O Relatório Estendido 

Pegue a data atual do sistema e use o toLocaleDateString com o objeto de opções customizadas para printar na tela o dia da semana atual por extenso (ex: "terça-feira").

*/

const dataAtual = new Date()
    
const opcoes = { 
    weekday: 'long',
    year: 'numeric', 
    month: 'long',   
    day: 'numeric' 
};

console.log(dataAtual.toLocaleDateString('pt-BR', opcoes));
