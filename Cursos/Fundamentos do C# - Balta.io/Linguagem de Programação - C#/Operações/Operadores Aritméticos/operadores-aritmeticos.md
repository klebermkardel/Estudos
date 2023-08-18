# Fundamentos do C#

## Linguagem de Programaçã - C#

### Operações

#### Operadores Aritméticos

##### Definições

- Soma => +
- Subtração => -
- Multiplicação => *
- Divisão => /

- Multiplicação e divisão são executadas primeiro
- Caso queira executar em outra ordem, usar parênteses
- Aceita short, int, float, double e decimal
- Em caso de números inteiros
    - Se o valor for real, será arredondado
    - 4.4 => 5

##### Exemplo

```
int soma = 25 + 22; // 47
int subtracao = 25 - 22; // 3
int multiplicacao = 25 * 22; // 550
int divisao = 22 * 5; // 4 - foi arredondado
```

- Utilizamos parênteses para redifinir a ordem de execução

##### Exemplo

```
int x = 2 + 2 x 2; // 6
int y = 2 + (2 * 2); 6 - mesmo do anterior
int z = (2 + 2) * 2; // 8 - executou a soma primeiro
```

