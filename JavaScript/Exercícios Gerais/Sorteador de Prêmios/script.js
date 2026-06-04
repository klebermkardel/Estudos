/*

O Sorteador de Prêmios (Base: Math e Métodos de Array)

Cenário: Uma comunidade tech vai sortear um kit de adesivos e uma camiseta entre os membros da lista de presença.

Dado o seguinte array de membros:

const participantes = ["Kleber", "João", "Lucas", "Mariana", "Beatriz"];

1. Crie uma função chamada realizarSorteio(lista).

2. Dentro dela, use o Math.random() combinado com o Math.floor() para gerar um número de índice aleatório válido baseado no tamanho do array recebido (lista.length).

3. A função deve exibir no console: "Parabéns [Nome do Sorteado], você é o ganhador do kit tech!".

4. Execute a função passando o array de participantes.

*/

// Exercício 3: O Sorteador de Prêmios (Base: Math e Métodos de Array)
const participantes = ["Kleber", "João", "Lucas", "Mariana", "Beatriz"];

const realizarSorteio = (lista) => {
    // Math.random() gera um número quebrado entre 0 e 0.999...
    // Multiplicamos pelo tamanho da lista (5) para obter um intervalo de 0 a 4.999...
    // Math.floor() joga o valor para baixo, isolando os inteiros: 0, 1, 2, 3 ou 4 (índices perfeitos do array)
    const indiceSorteado = Math.floor(Math.random() * lista.length);
    
    // Captura a string correspondente à posição sorteada
    const ganhador = lista[indiceSorteado];

    return `Parabéns ${ganhador}, você é o ganhador do Kit Tech!`;
};

// Executa o sorteio dinamicamente
console.log(realizarSorteio(participantes));