// Dobrar Valores com map: Crie um array de números. Use o método .map()
// para criar um novo array onde cada número é o dobro do número no array original.
// Imprima o novo array.

// 1. CRIAÇÃO DO ARRAY ORIGINAL
// Este é o nosso array de dados inicial.
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// --- LÓGICA COM .map() ---

// O método .map() é usado para TRANSFORMAR cada elemento de um array e criar um NOVO array com os resultados.
// Ele não modifica o array original ('numeros').
const numerosDobrados = numeros.map(
    // .map() recebe uma função de callback (neste caso, uma arrow function).
    // Esta função é executada para cada 'numero' dentro do array 'numeros'.
    // O valor que a arrow function RETORNA é o que será colocado no novo array.
    // 'numero => numero * 2' é uma forma curta de:
    // function(numero) {
    //   return numero * 2;
    // }
    numero => numero * 2
);

// --- SAÍDA FINAL ---
// Imprime o NOVO array ('numerosDobrados') que foi criado pelo .map().
// O método .join(', ') é usado para formatar a saída, mostrando os números separados por vírgula.
console.log(numerosDobrados.join(', '));
// Saída esperada: 2, 4, 6, 8, 10, 12, 14, 16, 18, 20