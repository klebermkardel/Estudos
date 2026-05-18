/*

Contexto: Você está listando os jogadores do seu time de basquete de rua, mas um deles se machucou.

O Desafio:

1. Crie um array timeBasquete com 4 nomes: "Kleber", "Carlos", "André", "Pedro".

2. O "André" se machucou e precisa ser substituído pelo "Marcos".

3. Use o método .splice() para remover o "André" (índice 2) e colocar o "Marcos" exatamente no lugar dele.

4. Exiba o time atualizado no console.

*/

// Inicializa um array contendo a escalação inicial dos jogadores titulares
const timeTitular = ["Kleber", "Carlos", "André", "Pedro"];

// Define uma variável booleana de controle para indicar se existe algum atleta com lesão
const jogadorLesionado = true;

// Cria uma cópia independente do array original usando o operador de propagação (Spread Operator `...`)
// para garantir que as alterações futuras não afetem a lista 'timeTitular' por referência
let timeModificado = [...timeTitular];

// Avalia a condição booleana; se for verdadeira (true), executa o bloco de substituição
if (jogadorLesionado) {
    // Altera o array 'timeModificado': acessa a posição 2, remove 1 elemento ("André") 
    // e insere a string "Marcos" exatamente no mesmo lugar
    timeModificado.splice(2, 1, "Marcos");
}

// Imprime no terminal o estado atualizado do novo array para validação do resultado
console.log(timeModificado); 
// Resultado esperado: ["Kleber", "Carlos", "Marcos", "Pedro"]