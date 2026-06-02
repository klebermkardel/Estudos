/*

Média de Notas do Estudante: 

Crie um objeto chamado aluno que tenha as propriedades nome e notas (um array de números). Adicione um método chamado calcularMedia que use o .reduce() (através do this.notas) para somar as notas, calcule a média e retorne o valor formatado com uma casa decimal.

*/

const aluno = {
    nome: "Kleber",
    notas: [5, 8, 6, 9],
    
    // Método dinâmico para calcular a média das notas do objeto
    calcularMedia: function() {
        // Soma todas as notas com .reduce() e divide dinamicamente pelo total de elementos (.length)
        const media = this.notas.reduce((acc, valorAtual) => acc + valorAtual, 0) / this.notas.length;
        
        // Retorna a média em formato de string com apenas 1 casa decimal
        return media.toFixed(1);
    }
};

// Exibe o relatório final no terminal
console.log(`A média de notas do aluno ${aluno.nome} foi ${aluno.calcularMedia()}`);
