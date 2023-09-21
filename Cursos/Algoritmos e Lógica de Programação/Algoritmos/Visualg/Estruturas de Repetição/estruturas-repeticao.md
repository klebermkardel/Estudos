# Visualg - Estruturas de Repetição

## Estrutura Enquanto (while)

Sintaxe:

```
Enquanto condicao faca
    bloco
FimEnquanto
```

Exemplo genérico:

```
mao <- 0
Enquanto (mao <= 5) faca
    troca
    mao <- mao + 1
FimEnquanto
```

Exemplo vida real:

```
Enquanto não arrumar o quarto faca
    castigo
FimEnquanto

liberado do castigo
```

Exemplo no VisualG:

```
contador: Inteiro

contador <- 0

Enquanto (contador <= 10) faca
    Escreval(contador)
    contador <- contador + 1
FimEnquanto
```

## Estrutura Repita Até Que (Do While)

Sintaxe:

```
Repita
    bloco
Ate condicao
```

Exemplo vida real:

```
repita
    castigo
Ate arrumar o quarto
```

Exemplo no VisualG:

```
N, S: Inteiro
resp: Caractere

S < 0
Repita
    Escreva("Digite um valor: ")
    Leia(N)
    S <- S + N
    Escreva("Você quer continuar? [S/N]")
    Leia(resp)
Ate(resp = "N")
Escreva("A soma de todos os valores é, S")

```

