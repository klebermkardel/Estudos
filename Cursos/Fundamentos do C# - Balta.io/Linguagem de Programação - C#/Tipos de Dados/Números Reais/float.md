# Fundamentos do C#

## Linguagem de Programaçã - C#

### Tipos de Dados
 
#### Números Reais

##### Definições

- Números que exisgem uma maior precisão, ou seja, com pontuação
    - float (Notação F)
    - double
    - decimal (Notação M)
- Possuem assimilação negativação e positiva por padrão, dispensando o uso de signed/unsigned em seus tipos

- float (32-bit)
    - -3.402823e38 até 3.402823e38
- double (64-bit)
    - -1.797693313486232e308 até 1.797693313486232e308
- decimal (128-bit)
    - (+ ou -)1.0 x 10e28 até 7.9 x 10e28

##### Exemplos

```
float velocidade = 125.00f; // Retorna 125.00
double cincoDivididoPorDois = 2.5;
decimal milisegundos = 0.1m; // retorna 0.1
```