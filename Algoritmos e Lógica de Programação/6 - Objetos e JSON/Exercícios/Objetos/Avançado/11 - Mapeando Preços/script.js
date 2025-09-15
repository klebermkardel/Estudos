// Use o método .map() no catalogo para criar um novo array de objetos. Cada novo objeto deve ter o nome do produto e um precoComDesconto, que é 10% mais barato que o preço original.

// Usaremos este formatador para exibir os preços
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

// --- LÓGICA COM .map() ---

// .map() cria um novo array sem alterar o 'catalogo' original.
const catalogoComDesconto = catalogo.map((produto) => {
    // Para cada 'produto' no catálogo, nós retornamos um NOVO objeto.
    return {
        // A propriedade 'nome' é copiada diretamente.
        nome: produto.nome,
        // A propriedade 'precoComDesconto' é calculada (preço original * 0.90 = 10% de desconto).
        precoComDesconto: produto.preco * 0.90
    };
});

// --- SAÍDA FINAL ---
console.log("\n--- Catálogo Original ---");
console.table(catalogo);

console.log("\n--- Catálogo com Preços de Desconto (10%) ---");
console.table(catalogoComDesconto);