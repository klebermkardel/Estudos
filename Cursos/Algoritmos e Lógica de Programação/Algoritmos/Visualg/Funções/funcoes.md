# Visualg - Funções 

## Funções - Processos repetitivos

Exemplo (Moedor de carne):

```
Verifique a escotilha
Botão azul posição 1
Olhe pelo visor
Gire a manivela ----> FuncaoPreparo()
Botão azul posição 2
Gire a manivela
Aperte o botão vermelho
--------------------------
Coloque a carne
--------------------------
Verifique a escotilha
Botao azul posição 1
Olhe pelo visor
Gire a manivela -----> FuncaoPreparo()
Botão azul posição 2
Gire a manivela
Aperte o botão vermelho
```


```
Procedimento FuncaoPreparo()
Inicio
    Verifique a escotilha
    Botão azul posição 1
    Olhe pelo visor
    Gire a manivela 
    Botão azul posição 2
    Gire a manivela
    Aperte o botão vermelho
FimProcedimento
```

Programa: 

```
Inicio
    FuncaoPreparo()
    Coloque a carne
    FuncaoPreparo()
FimAlgoritmo
```

### Passagem de parâmetros

Tipo 1: Por valor

Exemplo:

```
Funcao Soma(A, B : Inteiro) 
Inicio
    Escreval("Recebi o valor", A")
    Escreval("Recebi o valor", B)
    Escreval("A soma vale", A+B)
FimFuncao
```

### Passagem de parâmetros

Tipo 3: Por referência

Exemplo:

```
Funcao Soma(var A, B: Inteiro)
Inicio
    A = A + 1
    B = B + 2
    Escreval("A soma vale", A+B)
FimFuncao

Inicio
    X <- 4
    Y <- 8
    Soma(X, Y)
    Escreval(X, Y)
FimAlgoritmo
```