# Objetos e JSON

## Parte 1: Objetos - As Fichas de Cadastro

### O que são Objetos e por que usá-los?

Até agora, se quiséssemos representar uma pessoa, faríamos algo assim:

```js
const nome = "Ana Silva";
const idade = 30;
const cidade = "São Paulo";
```

Isso funciona, mas os dados estão soltos. Um **Objeto** nos permite agrupar todas essas informações relacionadas em uma única variável, criando uma estrutura coesa e representativa.

Pense em um objeto como uma **ficha de cadastro** ou um **dicionário**. Em vez de posições númericas como nos arrays ( ```[0], [1]``` ), usamos **etiquetas** (chamadas de **chaves** ou **propriedades**) para identicar cada valor.

### Conceitos-Chave:

* **Objeto:** A coleção de dados ( ```{ ... }``` ).
* **Propriedade (ou Chave):** O nome da "etiqueta" (ex: ```marca```). É sempre um texto.
* **Valor:** O dado associado à chave (ex: ```"Toyota```). Pode ser de qualquer tipo: string, número, booleano, outro array ou até outro objeto!

### Exemplo de um Objeto:

```js
const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2025,
    ligado: false
};
```

### A Sintaxe dos Objetos

**1. Criando um Objeto (Notação Literal)**

A forma mais comum é usar chaves ```{}```.

```js
// Criando um objeto 'pesso'
const pessoa = {
    nome: "Carlos Souza",
    idade: 42,
    profissao: "Engenheiro",
    temFilhos: true,
    hobbies: ["Leitura", "Corrida"] // Um valor pode ser um array!
};
```
**2. Acessando Propriedades**:

Existem duas maneiras, cada uma com seu uso.

* **Notação de Ponto (```.```):** A mais comum e fácil de ler.

```js
console.log(pessoa.nome); // Saída: "Carlos Souza";
console.log(pessoa.idade); // Saída: 42
console.log(pessoa.hobbies[0]); // Saída: "Leitura" (acessando um item do array dentro do objeto)
```

* **Notação de Colchetes (```[]```):** Mais poderosa, usada quando a chave é uma variável ou contém caracteres especiais.

```js
console.log(pessoa["profissao"]); // Saída: "Engenheiro"

let chave = "idade";
console.log(pessoa[chave]); // Saída: 42 (acessando a propriedade dinamicamente).
```

**3. Adicionando e Modificando Propriedades**

Você pode adicionar novas propriedades ou alterar as existentes a qualquer momento.

```js
const pessoa = { nome: "Ana" };

// Modificando uma propriedade existente
pessoa.nome = "Ana Pereira";

// Adicionando uma nova propriedade
pessoa.idade = 28;

console.log(pessoa); // Saída: { nome: "Ana Pereira", idade: 28 }
```

**4. Funções dentro de Objetos (Métodos)**

Quando uma propriedade de um objeto é uma função, nós a chamamos de **método**. Isso permite que o objeto tenha "comportamentos".

```js
const carro = {
    marca: "Honda",
    modelo: "Civic",
    ligado: false,
    // Este é um método
    ligar: function() {
        this.ligado = true;
        console.log("Carro ligado!");
    },
    // Sintaxe moderna para métodos
    desligar() {
        this.ligado = false;
        console.log("Carro desligado.");
    }
};

console.log(`O carro está ligado? ${carro.ligado}`); // Saída: false
carro.ligar(); // Chamando o método
console.log(`E agora, o carro está ligado? ${carro.ligado}`); // Saída: true
```

* **A Palavra-chave ```this```**: Dentro de um método, ```this``` se referente ao próprio objeto (```carro```, neste caso). ```this.ligado``` significa "a propriedade ```ligado``` *deste* objeto".

## Parte 2: JSON - A Linguagem Universal dos Dados

### O que é JSON?

**JSON** (JavaScript Object Notation) é um formato de texto leve para troca de dados. Pense nele como o "inglês" do mundo da programação: quase todas as linguagens e tecnologias (Python, Java, C#, bancos de dados) conseguem entendê-lo e gerá-lo.

A sintaxe do JSON é quase idêntica à dos objetos JavaScript, com duas regras principais:

1. As **chaves** devem estar sempre entre **aspas duplas**.
2. Não pode **haver funções** (métodos), apenas dados.

Exemplo de JSON (como um texto):

```JSON
{
    "nome": "Carla Mendes",
    "idade": 35,
    "cidade": "Recife",
    "ativa": true
}
```

**Por que isso tão importante?**

Quando seu programa JavaScript no navegador (front-end) precisa buscar informações de um servidor (back-end), a resposta do servidor quase sempre virá nesse formato de texto JSON.

### A Sintaxe da Conversão

O JavaScript nos dá duas ferramentas para lidar com JSON:

1. ```JSON.stringify(objeto)```: **Objeto JavaScript -> Texto JSON**

Converte um objeto JavaScript em uma string de texto no formato JSON.

```js
const usuario = { nome: "Pedro", idade: 25 };

const textoJSON = JSON.stringify(usuario);

console.log(textoJSON); // Saída: '{"nome":"Pedro","idade":25}' (uma string)
```

2. ```JSON.parse(textoJSON)```: **Texto JSON -> Objeto JavaScript**

Converte uma string de texto no formato JSON de volta para um objeto JavaScript com o qual podemos interagir.

```js
const textoJSON = '{"nome":"Pedro","idade": 25}';

const objetoUsuario = JSON.parse(textoJSON);

console.log(objetoUsuario.nome); // Saída: "Pedro" (agora é um objeto de verdade)
```



