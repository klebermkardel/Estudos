# Fundamentos do C#

## Linguagem de Programação - C#

### Laços de Repetição

#### While

##### Definições

- Tradução "Enquanto', ou seja, enquanto uma condição for verdadeira
- Definido pela palavra `while`
- Exige apenas uma condição
- Checa a condição ANTES de executar

##### Exemplos

```
var valor = 0;

// Conta de 0 a 5
// Exibe de 0 a 5 na tela
while (valor <= 5) {
    Console.WriteLine(valor);
    valor++;
}

--------------------------

valor = 0;

// Conta de 0 a 5
// Exibe de 1 a 5 na tela
while (valor <= 5) {
    valor++;
    Console.WriteLine(valor);
}

--------------------------

valor = 0;

// Infinito
while (true) {
    valor++;
    Console.WriteLine(valor);
}

```