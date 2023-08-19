# Fundamentos do C#

## Linguagem de Programação - C#

### Laços de Repetição

#### While

##### Definições

- Tradução: "Faça", ou seja realiza uma ação enquanto...
- Definido pela palavra `do/while`
- Exige apenas uma condição no `while`
- Checa a condição DEPOIS de executar

##### Exemplo

```
var valor = 0;

do {
    Console.WriteLine("Teste");
    valor++;
} while (valor < 5);
```