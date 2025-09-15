// Encontre o Primeiro Número Acima de 50: Crie um array de números inteiros aleatórios.
// Use o método .find() para encontrar e imprimir o primeiro número do array que seja maior que 50.
// Se nenhum número atender a essa condição, informe ao usuário.

// --- 1. GERAÇÃO DO ARRAY DE DADOS ---
// Script para gerar um array com 10 números inteiros aleatórios de 1 a 100.
const numeros = [];
const quantidadeDeNumeros = 10;
const valorMaximo = 100;

for (let i = 0; i < quantidadeDeNumeros; i++) {
    const numero = Math.floor(Math.random() * valorMaximo) + 1;
    numeros.push(numero);
}

// --- 2. LÓGICA DE BUSCA COM .find() ---

// O método .find() percorre o array 'numeros', um elemento por vez.
// Ele executa a função de callback (a arrow function) para cada elemento.
// A função 'numero => numero > 50' é o nosso "teste".
// - .find() retorna o PRIMEIRO elemento para o qual o teste for 'true'.
// - Assim que encontra o primeiro, ele PARA de procurar.
// - Se ele percorrer todo o array e não encontrar nenhum elemento que passe no teste,
//   ele retorna 'undefined'.
const resultado = numeros.find(numero => numero > 50);

// --- 3. SAÍDA FINAL ---

// Exibe o array que foi gerado para que possamos verificar o resultado.
console.log(`\nNúmeros gerados: [${numeros.join(', ')}]`);

// A verificação 'resultado !== undefined' é a forma correta de saber se
// o método .find() encontrou alguma coisa.
if (resultado !== undefined) {
    // Se 'resultado' não for 'undefined', significa que um número foi encontrado.
    console.log(`O primeiro número maior que 50 encontrado foi: ${resultado}`);
} else {
    // Se 'resultado' for 'undefined', significa que o laço terminou sem encontrar correspondências.
    console.log("Nenhum número maior que 50 foi encontrado na lista.");
}