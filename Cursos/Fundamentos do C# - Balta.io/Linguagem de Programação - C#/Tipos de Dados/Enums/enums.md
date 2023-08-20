# Fundamentos do C#

## Linguagem de Programação - C#

### Enums (Enumeradores)

#### Definições

- Usado para fornecer uma melhor visualização do código
- Substituem o uso de inteiros
- Usados em listas curtas
- Usados em dados fixos
    - Hard Coded
- Sempre em maiúsculo
- Começar com a letra E

- Anatomia de um enumerador

```
enum  EEstadoCivil
{
    // Enumeradores
    Solteiro = 1,
    Casado = 2,
    Divorciado = 3
}
```

- Uso de um enumerador

```
struct Cliente
{
    public string Nome;
    public EEstadoCivil EstadoCivil;
}

// Sem enumeradores
var cliente = new Cliente("João Silva", 1);

// Com enumerador
var cliente = new Cliente("João Silva", EEstadoCivil.Casado);
```

- Exibindo dados de um enumerador

```
Console.WriteLine(cliente.Nome);
Console.WriteLine(cliente.EstadoCivil); // Escreve Casado
Console.WriteLine((int)cliente.EstadoCivil); // Escreve 2
```