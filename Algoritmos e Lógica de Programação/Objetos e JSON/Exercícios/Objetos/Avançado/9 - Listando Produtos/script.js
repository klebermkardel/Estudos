// Listando Produtos: Usando o array catalogo, use o método .forEach() para
// percorrer o array e imprimir uma frase para cada produto.

// Cria um formatador de moeda para o Real (BRL).
const formatadorMoeda = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
});

// O array de objetos que representa nosso catálogo de produtos.
const produtos = [
    {nome: "Smartphone", preco: 1500.00, categoria: "Eletrônicos"},
    {nome: "Smart TV", preco: 2900.00, categoria: "Eletrônicos"},
    {nome: "Sofá-cama", preco: 1800.00, categoria: "Móveis"}
];

console.log("\n--- Nosso Catálogo ---");

// O método .forEach() executa a função de callback para cada objeto no array 'produtos'.
// A cada iteração, o objeto atual é passado como o primeiro parâmetro, que nomeamos de 'produto'.
produtos.forEach((produto, indice) => {
    // CORREÇÃO: Usamos a variável 'produto' para acessar as propriedades do objeto atual.
    // 'produto.nome' acessa a propriedade 'nome' do objeto que está sendo processado nesta iteração.
    // 'produto.preco' acessa a propriedade 'preco', e assim por diante.
    console.log(`\nProduto #${indice + 1}`); // Melhoria: adiciona um contador para cada produto
    console.log(`Nome: ${produto.nome}`);
    console.log(`Preço: ${formatadorMoeda.format(produto.preco)}`);
    console.log(`Categoria: ${produto.categoria}`);
});