# Estrutura de Repetição ```for``` (Para...)

O ```for``` é o loop planejado, o oposto do ```while```. Você usa o ```for``` quando você sabe exatamente o limite da repetição (onde começa, onde termina e o ritmo do passo).

    **Exemplo na vida real**: Faça **10** arremessos livres na quadra. Você sabe o ínicio (1º arremesso), o fim (10º arremesso) e vai contando de 1 em 1.

## A Estrutura do ```for```

Os parênteses do ```for``` são divididos em 3 partes fundamentais, separadas por ponto e vírgula (```;```):

```js
for (inicialização; condição; incremento) {
    // O código que vai se repetir fica aqui dentro
}
```

**Fazendo uma analogia com uma corrida de rua**:

1. **Inicialização (A largada)**: Onde a contagem começa. Criamos uma variável (geralmente chamanda de ```i```, de índice) com o valor inicial.
2. **Condição (A linha de chegada)**: O teste lógico que diz se a corrida deve continuar enquanto. Enquanto ela for verdadeira, o loop dá mais uma volta.
3. Incremento (O passo): O ritmo do contador. Diz quanto vamos somar ao nosso ```i``` no final de cada volta (geralmente de 1 em 1 usando ```i++```).

## O ```for``` na Prática

Lembra do nosso primeiro exemplo com o ```while```, onde contamos até 3 lances livres acertados? Olha como o ```for``` faz exatamente a mesma coisa, mas de forma muito mais compacta

```js
//  ( Largada ; Chegada; Passo)
for (let i = 1; i <= 3; i++) {
    console.log("Você acertou o " + i + " º arremesso!")
}

console.log("Treino finalizado!")
```

## O Fluxo de Execução Passo a Passo:

1. O JavaScript lê a largada: ```let i = 1```.
2. Ele checa a chegada: ```1 <= 3```? Sim!
3. Ele entrada nas chaves e executa o ```console.log```.
4. Ao chegar no fim das chaves, ele aplica o passo: ```i++``` (agora ```i``` vale 2).
5. Ele testa a chegada de novo: ```2 <= 3```? Sim!... e o clico se repete até que ```i``` vire 4. Como 4 não é menor ou igual a 3, o laço quebra.