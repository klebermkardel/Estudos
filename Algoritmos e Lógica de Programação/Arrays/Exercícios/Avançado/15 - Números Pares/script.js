// Filtrar Números Pares com filter: Crie um array com números variados.
// Use o método .filter() para criar um novo array que contenha apenas os números pares.

// --- 1. GERAÇÃO DO ARRAY DE DADOS ---
// Script padrão para gerar um array com 10 números aleatórios de 1 a 100.
const numeros = [];
const quantidadeDeNumeros = 10;
const valorMaximo = 100;

for (let i = 0; i < quantidadeDeNumeros; i++) {
    const numero = Math.floor(Math.random() * valorMaximo) + 1;
    numeros.push(numero);
}

// --- 2. LÓGICA DE FILTRAGEM ---

// O método .filter() cria um NOVO array, sem modificar o original ('numeros').
// Ele passa por cada 'numero' do array original.
// A arrow function 'numeroPar => numeroPar % 2 === 0' é a nossa "função de teste".
// - Se o teste retornar 'true' (o número é par), o elemento é INCLUÍDO no novo array.
// - Se o teste retornar 'false' (o número é ímpar), o elemento é IGNORADO.
const numerosPares = numeros.filter(numeroPar => numeroPar % 2 === 0);


// --- 3. SAÍDA FINAL ---
console.log("\n--- Filtro de Números Pares ---");
console.log(`Array Original:  [${numeros.join(', ')}]`);
console.log(`Array Filtrado (apenas pares): [${numerosPares.join(', ')}]`);