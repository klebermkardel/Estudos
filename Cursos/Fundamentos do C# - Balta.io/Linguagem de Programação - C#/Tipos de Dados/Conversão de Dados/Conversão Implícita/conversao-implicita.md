# Fundamentos do C#

## Linguagem de Programaçã - C#

### Tipos de Dados

#### Conversão de Dados
 
##### Conversão Implícita

###### Definições

- É comum precisarmos transforma um dado de tipo X para tipo Y
- Existem dois tipos de conversão, as implícitas e as explícitas
- As implicítas são conversões que
    - Podem ser executadas apenas com passagem de dados
    - Possuem tipos compatíveis

###### Exemplo

```
float valor = 25.8f;
int outro = 25;

valor = outro; // Conversão implícita
```

- A conversão anterior ocorreu pois um número real pode receber um número inteiro
- Porém, ao contrário não aconteceria
    - Um número inteiro não pode ter pontuação
    - Logo ele não poderia receber um número real
- A conversão só ocorrerá se
    - O tipo de dado for compatível
    - O tamanho do dado for compatível
- Em caso de números a precisão pode ser alterada
- Qualquer situação adversa causará erro

- sbyte
    - short, int, long, float, double, decimal
- byte
    - short, ushort, int, uint, long, ulong, float, double, decimal
- short
    - int, long, float, double, decimal
- ushort
    - int, uint, long, ulong, float, double, decimal
- int
    - long, floar, double, decimal
- uint
    - long, ulong, float, double, decimal
- long
    - float, double, decimal
- ulong
    - float, double, decimal
- char
    - ushort, int, uint, long, ulong, float, double, decimal
- float
    - double