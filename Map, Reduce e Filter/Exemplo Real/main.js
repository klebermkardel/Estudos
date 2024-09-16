const produtos = [
    {id: 1, nome: "Smartphone Galaxy S21", preco: 3999.99, temDesconto: true, quantidade: 1},
    {id: 2, nome: "Notebook Dell Inspiron", preco: 4500.00, temDesconto: false, quantidade: 3},
    {id: 3, nome: "Smart TV LG 55'", preco: 2799.00, temDesconto: true, quantidade: 5},
    {id: 4, nome: "Fone de Ouvido Bluetooth JBL", preco: 299.90, temDesconto: false, quantidade: 2},
    {id: 5, nome: "Câmera DSLR Canon", preco: 3200.00, temDesconto: true, quantidade: 1},
    {id: 6, nome: "Tablet iPad Air", preco: 4199.00, temDesconto: false, quantidade: 8},
    {id: 7, nome: "Console PlayStation 5", preco: 4699.00, temDesconto: true, quantidade: 2},
    {id: 8, nome: "Smartwatch Apple Watch", preco: 2499.00, temDesconto: false, quantidade: 7},
    {id: 9, nome: "Impressora HP Multifuncional", preco: 599.90, temDesconto: true, quantidade: 5},
    {id: 10, nome: "Caixa de Som Portátil Sony", preco: 1000.00, temDesconto: false, quantidade: 3}
];

// Utiliza Map para aplicar desconto em determinados produtos

const precosAtualizados = produtos.map(produto => {
    const novoPreco = produto.temDesconto ? produto.preco * 0.9 : produto.preco;

    return {
        id: produto.id,
        nome: produto.nome,
        preco: novoPreco.toLocaleString('pt-br', {
            style: 'currency', currency: 'BRL'
        }),
        quantidade: produto.quantidade
    };
});

// Utiliza Reduce para saber o faturamento total em caso de venda de todo o estoque

const totalVendas = produtos.reduce((acumulador, produto) => {

    return acumulador + (produto.preco * produto.quantidade)
}, 0);

// Exibe a lista de produtos com seu nome, preço e quantidade em estoque e o faturamento total


const produtosContainer = document.getElementById('produtos-container');

const totalElement = document.getElementById('totalVendas').innerHTML = totalVendas.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL'
});

precosAtualizados.forEach(produto => {
    const produtoElement = document.createElement('div');
    produtoElement.classList.add('produto');

    produtoElement.innerHTML = `
        <h2>${produto.nome}</h2>
        <span class="preco">${produto.preco}</span>
        <span class="quantidade">Quantidade: ${produto.quantidade}</span>
    `;

    produtosContainer.appendChild(produtoElement);
});

