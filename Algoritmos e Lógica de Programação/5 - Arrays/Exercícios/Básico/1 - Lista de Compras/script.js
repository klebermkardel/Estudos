// Lista de Compras: Crie um array chamado listaDeCompras com pelo menos 5 itens. Imprima no console o primeiro item, o terceiro item e o último item da lista.

const listaDeCompras = ["Papel Higiênico", "Ovos", "Leite", "Pernil", "Coca-Cola"];

console.log("\n--- Lista de Compras ---\n");

console.log(`Primeiro item: ${listaDeCompras[0]}`);
console.log(`Segundo item: ${listaDeCompras[2]}`);

const ultimoItem = listaDeCompras[listaDeCompras.length -1];
console.log(`Último item: ${ultimoItem}`);