/*

O Marcador de Pontos: 

Crie um objeto chamado partida com as propriedades timeCasa (string) e placar (número iniciando em 0). Adicione um método chamado fazerCesta(pontos) que recebe quantos pontos foram feitos (1, 2 ou 3) e soma diretamente no placar usando o this. Teste o método chamando-o três vezes e exiba o placar final.

*/

const partida = {
    timeCasa: "Raptors",
    placar: 0,
    
    // Método que altera o estado do objeto usando o 'this'
    fazerCesta: function(pontos) {
        // Altera diretamente o valor da propriedade 'placar' deste objeto
        this.placar += pontos;
        
        return `Pontuação atual: ${this.placar} ponto(s)`;
    }
};

// Testando o acumulador chamando o método três vezes seguidas
console.log(partida.fazerCesta(3)); // 3
console.log(partida.fazerCesta(1)); // 4
console.log(partida.fazerCesta(2)); // 6