# Fundamentos do C#

## Linguagem de Programação - C#

### Estruturas Condicionais

#### Estrutura Switch

##### Definições

- Utilizando quando temos muitas decisões
- Executado em cascata
- Devemos parar manualmente a execução com o comando `break`
- Possui uma execução padrão chamada `default`

##### Exemplo

```
int valor = 1;

switch(valor)
{
    case 1: 
        Console.WriteLine("1");
        break;
    case 2: 
        Console.WriteLine("2");
        break;
    case 3: 
        Console.WriteLine("3");
        break;
    default:
        Console.WriteLine("4"); // Se não for 1, 2 ou 3
        break;
}
```