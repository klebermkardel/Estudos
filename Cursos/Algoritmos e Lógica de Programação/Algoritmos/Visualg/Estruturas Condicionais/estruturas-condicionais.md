# Visualg - Estruturas Condicionais

## Estrutura Condicional Simples - If (Se)

```
Se (condicao) entao
    Bloco
FimSe
```

Exemplo:

```
Se (dinheiro >= 10000) entao
    Escreva("Partiu Disney")
FimSe
```

## Estrutura Condicional Composta - If Else (Se / Senao)

```
Se (condicao) entao
    Bloco A
senao
    Bloco B
FimSe
```

Exemplo:

```
Se (dinheiro >= 10000) entao
    Escreva("Partiu Disney")
senao
    Escreva("Vou ficar em casa")
FimSe
```

## Estrutura Condicional Aninhada - If ElseIf (Se senaoSe senao)

```
Se (condicao1) entao
    Bloco A
senao 
    Se (condicao2) entao
        Bloco B
    senao
        Bloco C
    FimSe
FimSe
```

Exemplo:

```
Se (dinheiro >= 10000) entao
    Escreva("Partiu Disney")
senao 
    Se (dinheiro >= 5000) e (dinheiro < 10000) entao
        Escreva("Visitar família")
    senao
        Escreva("#chateado")
    FimSe
FimSe
```

## Estrutura Condicional Aninhada - Switch (Escolha Caso)

```
Escolha(variavel)
    Caso valor
        Bloco A
    Caso valor
        Bloco B
    Caso valor
        Bloco C
    OutroCaso
        Bloco D
FimEscolha
```