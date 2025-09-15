// Filtrando por Categoria: Usando o catalogo, use o método .filter() para criar um novo array que contenha apenas os produtos da categoria "Eletrônicos". Imprima o novo array.

const produtos = [
    {nome: "Smartphone", preco: 1500.00, categoria: "Eletrônicos"},
    {nome: "Smart TV", preco: 2900.00, categoria: "Eletrônicos"},
    {nome: "Sofá-cama", preco: 1800.00, categoria: "Móveis"}
];

const produtosEletronicos = produtos.filter((produto) => {
        return produto.categoria === "Eletrônicos";
    }
);

console.log("\n--- Catálogo Completo ---");
// MELHORIA: Usamos console.table para uma visualização clara do array original.
console.table(produtos);

console.log("\n--- Apenas Produtos Eletrônicos ---");
// E também para o novo array filtrado.
console.table(produtosEletronicos);