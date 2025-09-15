// Use o método .reduce() no catalogo para calcular o valor total de todos os produtos no carrinho.

const formatadorMoeda = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
});

// O nosso array de objetos original
const catalogo = [
    { nome: "Smartphone", preco: 1500.00, categoria: "Eletrônicos" },
    { nome: "Smart TV", preco: 2900.00, categoria: "Eletrônicos" },
    { nome: "Sofá-cama", preco: 1800.00, categoria: "Móveis" }
];

// --- LÓGICA COM .reduce() ---

// .reduce() irá percorrer o array e acumular um valor.
const valorTotal = catalogo.reduce(
    // A função de callback recebe o acumulador e o item atual (produto).
    (acumulador, produto) => {
        // A cada iteração, somamos o 'preco' do 'produto' atual ao 'acumulador'.
        return acumulador + produto.preco;
    }, 
    0 // O '0' é o valor inicial do nosso 'acumulador'.
);

// --- SAÍDA FINAL ---
console.log("\n--- Calculando o Valor Total do Catálogo ---");
console.table(catalogo);
console.log(`\nO valor total de todos os produtos é: ${formatadorMoeda.format(valorTotal)}`);