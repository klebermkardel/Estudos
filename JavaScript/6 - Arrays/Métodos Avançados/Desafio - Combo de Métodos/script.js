/*

Desafio Prático: O Combo de Métodos

Para você ver o poder desse quarteto trabalhando junto no seu VS Code, monte o seguinte cenário:

Imagine que você recebeu uma lista de valores brutos de reembolsos de transporte para ir até as entrevistas de emprego, mas a lista veio bagunçada com valores zerados (erros do sistema).

const reembolsosBrutos = [50, 0, 25, 0, 100, 0];

O que fazer:

1. Use o .filter() no reembolsosBrutos para criar uma nova lista chamada reembolsosValidos contendo apenas os valores maiores que zero (> 0).

2. Use o .map() nessa nova lista reembolsosValidos para criar uma lista chamada reembolsosComBonus somando R$ 10 de bônus em cada valor.

3. Use o .reduce() na lista reembolsosComBonus para calcular o totalAReceber (somando todos os valores da lista, começando em 0).

4. No final, use um console.log para mostrar o valor total acumulado.

*/

// Array inicial contendo os dados brutos com inconsistências (valores zerados)
const reembolsosBrutos = [50, 0, 25, 0, 100, 0];

// 1. FILTER: Cria uma nova lista retendo apenas os elementos que atendem à condição estrita (> 0)
const reembolsosValidos = reembolsosBrutos.filter(reembolso => reembolso > 0); 

// 2. MAP: Percorre o array filtrado e gera uma nova lista aplicando uma modificação (+ 10) em cada item
const reembolsosComBonus = reembolsosValidos.map(reembolso => reembolso + 10);

// 3. REDUCE: Processa a lista modificada acumulando todos os valores em uma única variável somatória inicializada em 0
const totalAReceber = reembolsosComBonus.reduce((acc, valorAtual) => acc + valorAtual, 0); 

// Exibe o montante final formatando a saída para o padrão monetário de duas casas decimais
console.log("O valor total a receber é de R$ " + totalAReceber.toFixed(2));

/*

Nível Avançado: O Encadeamento (Method Chaining)

Como o .filter() e o .map() sempre devolvem um array novinho, o JavaScript moderno permite conectar um método direto no outro, sem precisar criar variáveis intermediárias (reembolsosValidos, reembolsosComBonus).

Olha como o mesmo código poderia ser escrito em um único "bloco contínuo":

*/

const totalFinal = reembolsosBrutos
    .filter(reembolso => reembolso > 0)          // Passo 1: Filtra
    .map(reembolso => reembolso + 10)            // Passo 2: Transforma
    .reduce((acc, valorAtual) => acc + valorAtual, 0); // Passo 3: Reduz

console.log("Total a receber: R$ " + totalFinal.toFixed(2)); // R$ 205.00

// Isso é o que chamamos de Programação Funcional. O código fica extremamente limpo e expressivo.