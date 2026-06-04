/*

O Carrinho de Compras (Base: Objetos, Arrays e Loops)

Cenário: Um e-commerce precisa calcular o valor total dos produtos que um cliente colocou no carrinho.

1. Crie um objeto chamado carrinho.

2. Dentro dele, adicione uma propriedade chamada produtos, que será um array de objetos. Cada produto deve ter: nome (string) e preco (número). Insira pelo menos 3 produtos com valores diferentes.

3. Dentro do próprio objeto carrinho, crie um método chamado calcularTotal.

4. Esse método deve usar o this para acessar a lista de produtos, somar o preço de todos eles (pode usar .reduce() ou um loop como .forEach()) e retornar o valor total formatado.

5. Execute o console.log(carrinho.calcularTotal()) no final.

*/

// Exercício 2: O Carrinho de Compras (Base: Objetos, Arrays e Loops)
const carrinho = {
    produtos: [
        { nome: "Leite", preco: 5.50 }, 
        { nome: "Papel Higiênico", preco: 13.00 }, 
        { nome: "Batata Frita Congelada 2Kg", preco: 21.90 }
    ],
    // Método que calcula a soma do carrinho
    calcularTotal: function() {
        // O 'this' acessa o array 'produtos' interno deste objeto.
        // Somamos o acumulador (acc) com a propriedade '.preco' do objeto atual (valorAtual).
        const valorTotal = this.produtos.reduce((acc, valorAtual) => acc + valorAtual.preco, 0);

        // Retorna o valor final com a formatação monetária brasileira
        return valorTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }
};

// Executa o método e exibe o total formatado no terminal
console.log(carrinho.calcularTotal());