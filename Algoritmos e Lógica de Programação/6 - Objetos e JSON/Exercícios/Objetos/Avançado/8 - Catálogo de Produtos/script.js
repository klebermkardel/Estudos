// Catálogo de Produtos: Crie um array chamado catalogo. Preencha-o com 3 ou 4 objetos, onde cada objeto representa um produtos e tem as propriedades nome (string), preco (number) e categoria (string).

// 1. CRIAÇÃO DO ARRAY DE OBJETOS
// 'produtos' é o nosso array, que funciona como um container para os produtos.
const produtos = [
    // Cada item dentro do array é um objeto {}, representando uma "ficha de produto".
    {
        nome: "Smartphone",
        preco: 1500.00,
        // MELHORIA SUGERIDA: Padronizar a capitalização (opcional).
        categoria: "Eletrônicos" 
    },
    {
        nome: "Smart TV",
        preco: 2900.00,
        categoria: "Eletrônicos" // Padronizado para consistência
    },
    {
        nome: "Sofá-cama",
        preco: 1800.00,
        categoria: "Móveis" // Padronizado para consistência
    }
];

// --- VISUALIZAÇÃO DOS DADOS ---
// MELHORIA: Usar console.table() para exibir o array de objetos.
// O console irá renderizar uma tabela limpa e organizada com os seus dados.
console.log("\n--- Catálogo de Produtos ---");
console.table(produtos);