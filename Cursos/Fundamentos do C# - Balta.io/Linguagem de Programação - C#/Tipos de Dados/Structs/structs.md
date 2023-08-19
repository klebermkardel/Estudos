# Fundamentos do C#

## Linguagem de Programação - C#

### Structs

#### Definições

- Tipos de dado estruturado
- Apenas a estrutura, o esqueleto
- Tipo de valor
- Armazenam apenas outros tipos de dados
- Definido pela palavra `struct`
- Composto de propriedades e métodos
- Nome sempre com maiúsculo
    - O mesmo para propriedades e métodos
- Criado a partir da palavra `new`
    - Neste momento sim temos os valores

- A anatomia de uma estrutura normalmente é

```
struct Product
{
    // Propriedades

    // Métodos
}
```

- Anatomia de uma propriedade

```
struct Product
{
    // Propriedades
    public int Id;

    // Métodos
}
```

- Anatomia de um método

```
struct Product
{
    // Propriedades
    public int Id;
    public float Price;

    // Métodos
    public float PriceInDolar(float dolar)
    {
        return Price * dolar;
    }
}
```

- Para criar uma estrutura

```
static void Main(string[] args)
{
        // Cria uma estrutura
        var product = new Product();
}
```

- Vem com os dados dos tipos padrão
- Para preencher os dados

```
var product = new Product();
product.Id = 1;
product.Title = "Mouse Gamer";
product.Price = 197.23f;
Console.WriteLine(product.Id);
Console.WriteLine(product.Title);
Console.WriteLine(product.Price);
```

- Método construtor é um método commesmo nome do struct

```
struct Product
{
    public Product(int id, string title, float price)
    {
        Id = id;
        Title = title;
        Price = price;
    }
}
```

- Eles facilitam a criação de estrutura

```
var product = new Product(1, "Mouse Gamer", 128.75f);
Console.WriteLine(product.Id);
Console.WriteLine(product.Title);
Console.WriteLine(product.Price);
Console.WriteLine(product.PriceInDolar(5.70f));

```