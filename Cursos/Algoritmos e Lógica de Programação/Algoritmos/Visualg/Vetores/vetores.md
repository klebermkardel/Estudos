# Visualg - Variáveis Compostas

## Variáveis Compostas Homogêneas

### Vetores (Arrays)

Exemplo:

```
var
    n1: inteiro
    n2, n3, n4: inteiro
    n: vetor[1..4] de inteiro
inicio
    n[0] <- 3
    n[1] <- 5
    n[2] <- 1
    n[3] <- 0
fimAlgoritmo
```

```
    ________________________________
    |   n1  |       |       |      |
    |_______|_______|_______|______|
    |       |   n2  |       |  n4  |
    |_______|_______|_______|______|
    |   n3  |       |       |      |
    |_______|_______|_______|______|
    |   3   |   5   |   1   |   0  |
  n |_______|_______|_______|______|
        0       1       2       3
```

Percorrendo um vetor:

```
var
    n: vetor[1..4] de inteiro
    i: inteiro
inicio
    para i <- 1 ate 4 faca
        leia(n[i])
    fimPara
fimAlgoritmo
```