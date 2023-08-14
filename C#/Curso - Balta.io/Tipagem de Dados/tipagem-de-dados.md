# Fundamentos do C#

## Tipagem de Dados

### Definições

- Também chamadas de formente tipadas
- Obrigam a especificar o tipo de dado da informação
- Menor liberdade
- Maior otimização

*** Tipo de Dado: Um tipo de dado define o formato dele, onde definimos por exemplo que aquela informação é um número, uma letra, uma cadeia de caracteres e assim por diante. ***

### Exemplo

```
int idade = 18; // OK
int idade = 18.2; // ERRO
int idade = "18"; // ERRO
int idade = "a"; // ERRO
```

- Este mesmo exemplo em JavaScript, uma linguagem não tipada:

```
let idade = 18; // OK
let idade = 18.2; // OK
let idade = "18"; // OK
let idade = "a"; // OK
```

- Definir tipos é pradonizar os dados
 - Para nós e para o processador/memória
- O let utiliza sempre o mesmo tamanho de alocação
- Tipando temos uma otimização

*** No C# por exemplo... ***

```
int => 32 bit
float => 32 bit
double => 64 bit
decimal => 128 bit
```

