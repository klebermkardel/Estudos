# Fundamentos do C#

## Linguagem de Programação - C#

### Laços de Repetição

#### For

##### Definições

- Tradução "para", ou seja, para cada item em um valor...
- Executa uma determinada ação várias vezes
- Definido pela palavra `for`
- Exige 3 parâmetros
    - Contador
    - Condição
    - Incremento

- for (var i = 0; i <= 5; i++)

##### Exemplos

```
// Conta de 0 a 5
for (var i = 0; i <= 5; i++)
    Console.WriteLine(i);

// Conta de 1 a 5
for (var i = 1; i <= 5; i++)
    Console.WriteLine(i);

// Conta de 0 a 4
for (var i = 0; i < 5; i++)
    Console.WriteLine(i);

// Conta de 5 a 0 
for (var i = 5; i >= 0; i--)
    Console.WriteLine(i);
```