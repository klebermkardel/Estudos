// Nomes em Maiúsculas com map: Crie um array com nomes em letras minúsculas.
// Use .map() para criar um novo array com todos os nomes convertidos para letras maiúsculas.

// 1. CRIAÇÃO DO ARRAY ORIGINAL
// Este é o nosso array de strings que servirá como base.
const nomes = ["João", "Maria", "Carlos", "Ana", "José"];

// --- LÓGICA COM .map() ---

// O método .map() percorre cada elemento do array 'nomes' e cria um NOVO array,
// sem alterar o original.
const nomesMaiusculos = nomes.map(
    // A cada iteração, a arrow function recebe o elemento atual, que chamamos de 'nome'.
    // 'nome.toUpperCase()' é um método de string que retorna uma nova string
    // com todos os caracteres em maiúsculo.
    // Este valor retornado é o que será adicionado ao novo array 'nomesMaiusculos'.
    nome => nome.toUpperCase()
);

// --- SAÍDA FINAL ---
// O método .join('\n') formata a saída para que cada nome do novo array
// seja impresso em uma linha separada, melhorando a legibilidade.
console.log(nomesMaiusculos.join('\n'));
// Saída esperada:
// JOÃO
// MARIA
// CARLOS
// ANA
// JOSÉ