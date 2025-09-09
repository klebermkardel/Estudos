# Arrays - As Listas de Dados

## A Teoria: O que são Arrays?

Até agora, cada variável guardava um único valor (`let nome = "Ana"`). Um **Array** (também chamado de vetor ou lista) é um tipo especial de variável que pode guardar **múltiplos valores** em uma coleção ordenada.

Pense em um array como um **gaveteiro** ou uma **prateleira**. A prateleira é a variável, e cada item que você coloca nela é um **elemento** do array.

## Conceitos-Chave:

* **Elementos**: Os valores dentro do array.
* **Índice (Index)**: A posição de cada elemento. **MUITO IMPORTANTE:** A contagem dos índices em programação **sempre começa do zerto (0)**.

## Exemplo de um Array:

```const frutas = ["Maçã", "Banana", "Laranja"];```

| Elemento | "Maçã" | "Banana" | "Laranja" |
|---|---|---|---|
| **Índice** | 0 | 1 | 2 |

## A Sintaxe dos Arrays:

**1. Criando um Array**

A forma mais comum é usar colchetes ```[]```;

```js
const numeros = [10, 20, 30, 40];
const nomes = ["Alice", "Bruno", "Carla"];
const misturado = [10, "Ana", true]; // Arrays podem misturar tipos de dados
```

**2. Acessando Elementos**

Usamos o nome do array seguido de colchetes com o número do índice.

```js
const nomes = ["Alice", "Bruno", "Carla"];
console.log(nomes[0]); // Saída: "Alice" (o primeiro elemento)
console.log(nomes[2]); // Saída: "Carla" (o terceiro elemento)
```

**3. Modificando Elementos**

Você pode reatribuir um valor a uma posição específica.

```js
const nomes = ["Alice", "Bruno", "Carla"];
nomes[1]= "Beatriz"; // Troca "Bruno" por "Beatriz"
console.log(nomes); // Saída: ["Alice", "Beatriz", "Carla"]
```

**4. Propriedades e Métodos Essenciais**

**Propriedade**

* ```length```:

 * **Descrição**: Retorna o número de elementos do array. É a forma de saber o tamanho da lista

 * **Exemplo**:

 ```js
 const numeros = [10, 20, 30];
 console.log(numeros.length); // Saída: 3
 ```

**Adicionar e Remover Elementos**

* ```.push(elemento)```:
 * **Descrição**: Adiciona um ou mais elementos no **final** do array.
 * **Exemplo**:

 ```js
 const frutas = ["Maçã", "Banana"];
 frutas.push("Laranja");
 console.log(frutas); // Saída: ["Maçã", "Banana", "Laranja"];
 ```

* ```.pop()```:
 * **Descrição**: **Remove** o último elemento do array e o retorna.
 * **Exemplo**:

 ```js
 const frutas = ["Maçã", "Banana", "Laranja"];
 const ultimaFruta = frutas.pop();
 console.log(frutas); // Saída: ["Maçã","Banana"]
 console.log(ultimaFruta); // Saída: "Laranja";
 ```

* ```.unshift(elemento)```:
 * **Descrição**: Adiciona um ou mais elementos no **início** do array.
 * **Exemplo**:

 ```js
 const frutas = ["Maçã", "Banana"];
 frutas.unshift("Morango");
 console.log(frutas); // Saída: ["Morango", "Maçã", "Banana"]
 ```

* ```.shift()```:
 * **Descrição**: **Remoce** o primeiro elemento do array e o retorna. É o oposto de ```.pop()```;
 * **Exemplo**:

 ```js
const frutas = ["Morango", "Maçã", "Banana"];
const primeiraFruta = frutas.shift();
console.log(frutas); // Saída: ["Maçã", "Banana"]
console.log(primeiraFruta); // Saída: "Morango"
 ```

**Encontrar e Verificar Elementos**

* ```.indexOf(elemento)```:
 * **Descrição**: Retorna o **índice** do primeiro elemento encontrado que correspode ao valor. Se não encontrar, retorna ```-1```;
 * **Exemplo**:

 ```js
 const nomes = ["Ana", "Bruno", "Ana"];
 console.log(nomes.indexOf("Ana")); // Saída: 0
 console.log(nomes.indexOf("Bruno")); // Saída: 1
 console.log(nomes.indexOf("Carlos")); // Saída: -1
 ```

* ```.includes(elemento)```:
 * **Descrição**: Retorna ```true``` se o array contém o elemento, e ```false``` caso contrário. É mais direto que o ```indexOf``` quando você só precisa saber se o item existe.
 * **Exemplo**:

 ```js
 const nomes = ["Ana", "Bruno", "Carla"];
 console.log(nomes.includes("Bruno")); // Saída: true
 console.log(nomes.includes("Daniel")); // Saída: false
 ```



## A Combinação Poderosa: Laços e Arrays

Arrays e laços ```for``` nasceram um para o outro. A tarefa mais comum com um array é "fazer algo com cada um dos seus elementos". É aí que o ```for``` brilha.

**O Padrão Clássico para Percorer um Array:**

```js
const meuArray = [/* ...vários elementos... */];
// O laço vai do índice 0 até o último índice do array
for (let i = 0; i < meuArray.length; i++) {
    // 'i' representa o índice atual
    // 'meuArray[i]' acessa o elemento naquele índice
    console.log(`O elemento do índice ${i} é ${meuArray[i]}`);
}
```

* ```let i = 0```: Começamos no primeiro índice
* ```i < meuArray.length```: A condilção para continuar. Se um array tem 3 elementos, seu ```length``` é 3, e os índices são 0, 1, 2. O laço deve parar quando ```i``` for 3, por isso usamos ```<``` e não ```<=```.

## Exemplo Prático:

```js
const notas = [7.5, 8.0, 9.5, 6.0];
let somaDasNotas = 0;

for(let i = 0; i < notas.length; i++) {
    console.log(`Somando a nota ${notas[i]}`);
    somaDasNotas += notas[i];
}

console.log(`A soma de todas as notas é: ${somaDasNotas}`);
```

**Métodos Avançados de Iteração (Substituem o ```for``` em muitos casos)**

* ```.forEach(callback)```:
 * **Descrição**: Executa uma função (```callback```) para **cada elemento** do array.
 * **Exemplo**:

 ```js
 const numeros = [1, 2, 3];
 numeros.forEach((numero, indice) = > {
     console.log(`No índice ${indice} está o número ${numero}`);
 });
 // Saída:
 // No índice 0 está o número 1
 // No índice 1 está o número 2
 // No índice 2 está o número 3
 ```

* ```.map(callback)```:
 * **Descrição**: Cria um **um novo array** com o resultado de aplicar um função a cada elemento
 * **Exemplo**:

 ```js
 const numeros = [1, 2, 3];
 const numerosDobrados = numeros.map(numnero => numero * 2);
 console.log(numerosDobrados); // Saída: [2, 4, 6]
 ```

* ```.filter(callback)```:
 * **Descrição**: Cria um **novo array** contendo apenas os elementos que retornaram ```true``` ao serem passados por uma funçãode teste.
 * **Exemplo**:

 ```js
 const idades = [15, 22, 18, 30, 16];
 const adultos = idades.filter(idade => idade >= 18);
 console.log(adultos); // Saída: [22, 18, 30]
 ```