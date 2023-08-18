# Fundamentos do C#

## Linguagem de Programaçã - C#

### Tipos de Dados
 
#### Byte

##### Definições

- O tipo **Byte** é utilizado para representar um byte de fato
- Em diversos casos precisamos da cadeia de bytes de um arquivo por exemplo
    - Também chamado de byte array
- Temos também o *sbyte*, que permite valores negativos

**Signed e Usigned: Valores com sinal como "-" por exemplo, são chamados de signed**

- byte (8-bit)
    - 0 até 255
- sbyte (8-bit)
    - -128 até 127

- Note que o **sbyte** permite valores negativos, por isto no nome **sbyte**, que signigica Signed Byte

##### Exemplo 

```
byte meuByte = 127;
```