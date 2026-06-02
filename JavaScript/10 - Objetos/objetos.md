# O que é um Objeto em JavaScript?

Até agora, você salvava dados soltos em variáveis ou **listas (arrays)**. Por exemplo, se fôssemos mapear um jogador de basquete, faríamos assim:

```js
const nomeJogador = "Kleber"
const camisaJogador = 23
const mediaPontos = 15.4
```

O problema? Essas variáveis estão soltas na memória. O JavaScript não sabe que a ```mediaPontos``` pertence ao ```nomeJogador```.

Um **Objeto** resolve isso: ele funciona como uma caixa etiquetada que agrupa características (propriedades) e ações (métodos) de um elemento do mundo real.

## A Sintaxe de um Objeto

Usamos chaves ```{}``` para abrir o objeto e uma estrutura ```chave: valor```, separada por vírgulas:

```js
const jogador = {
    nome: "Kleber",
    camisa: 23,
    mediaPontos: 15.4,
    estaAtivo: true
}
```

## Como acessar os dados dentro de um Objeto?

Existem duas formas de pegar as informações que estão lá dentro. A primeira é a mais usada no mercado:

1. **Notação por Ponto (```.```)**

Você digita o nome do objeto seguido de um ponto e o nome da chave que deseja acessar.

```js
console.log(jogador.nome) // "Kleber"
console.log(jogador.camisa) // 23
```

2. **Notação por Colchetes (```[]```)**

Útil quando o nome da chave vem de uma variável dinâmica ou tem caracteres especiais.

```js
const busca = "mediaPontos"
console.log(jogador[busca]) // 15.4
```

## Manipulando um Objeto (Criando e Deletando chaves)

Objetos em JavaScript são **mutáveis**. Isso significa que você pode adicionar novas propriedades ou deletar chaves existentes a qualquer momento, mesmo que o objeto tenha sido declarado com ```const```.

```js
const vagaDev = {
    titulo: "Dev Júnior",
    salario: 4500
}

// 1. Adicionando uma nova propriedade
vagaDev.tecnologia = "JavaScript"

// 2. Modificando um valor existente
vagaDev.salario = 4800

// 3. Deletando uma propriedade
delete vagaDev.titulo

console.log(vagaDev) // Resultado: { salario: 4800, tecnologia: 'JavaScript' }
```

No dia a dia do desenvolvimento, nós raramento trabalhamos com objetos isolados ou estáticos. Nós trabalhamos com **Array de Objetos** e com **Métodos** (ações que o objeto sabe executar.)

Vamos dividir o conteúdo sobre Arrays de Objetos e Métodos em pastas separadas.