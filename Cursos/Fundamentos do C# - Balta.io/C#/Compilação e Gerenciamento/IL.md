# Fundamentos do C#

## IL - Intermediate Language

### Definições

- Embora as compilações sejam diferentes
    - O gerenciamento é igual
    - Alocação de memória
    - Execução de instruções no processador
- O CLR recebe um código e compila ele para IL
    - C#, VB.NET, F#, Cobol.NET
- Podemos ter arquivos C# e VB.NET no mesmo projeto
    - Nunca no mesmo arquivo
- O resultado da compilação do IL é sempre o mesmo


```
------------------------------------
| Código C#, VB.NET, F#, Cobol.NET |
------------------------------------

                ||
                ||
                \/

------------------------------------
|    Intermediate Languege (IL)    |
------------------------------------

                ||
                ||
                \/

------------------------------------
|         Código Binário           |
------------------------------------
```

- O processo de conversão do IL para binário é conhecido como `JIT`

*** JIT: Sigla para Just in Time ***