# Visualg - Rotinas e Funções 

## Rotinas - Processos repetitivos que não retornam um valor

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
Procedimento RotinaPreparo()
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
    RotinaPreparo()
    Coloque a carne
    RotinaPreparo()
FimAlgoritmo
```

### Passagem de parâmetros

Tipo 1: Por valor

Exemplo:

```
Procedimento RotinaSoma(A, B : Inteiro) 
Inicio
    Escreval("Recebi o valor", A")
    Escreval("Recebi o valor", B)
    Escreval("A soma vale", A+B) // Escreve 9
FimProcedimento

Inicio
    N1 <- 5
    N2 <- 4
    RotinaSoma(N1, N2)
FimAlgoritmo
```

### Passagem de parâmetros

Tipo 3: Por referência

Exemplo:

```
Procedimento RotinaSoma(var A, B: Inteiro)
Inicio
    A = A + 1
    B = B + 2
    Escreval("A soma vale", A+B)
FimProcedimento

Inicio
    X <- 4
    Y <- 8
    Soma(X, Y)
    Escreval(X, Y)
FimAlgoritmo
```

## Funções - Processos repetivivos que retornam um valor

Exemplo (parâmetros por valor):

```
Funcao Soma(A, B: Inteiro): Inteiro
var
    S: Inteiro
Inicio
    S = A + B
    Retorne S
FimFuncao

Inicio
    N1 <- 5
    N2 <- 4
    RES <- Soma(N1, N2)
    Escreval("A soma de A+B é ", RES)
FimAlgoritmo
```