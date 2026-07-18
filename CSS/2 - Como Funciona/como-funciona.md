# Como o CSS funciona?

O **HTML** cria a estrutura (os tetos, botoões e imagens), e o CSS entra para dar o estilo (as cores, tamanhos e o visual).

Para o CSS funcionar, ele precisa de três coisas essenciais:

1. **O Seletor**: Quem eu quero estilizar? (Ex: um parágrafo, um título, um botão).

2. **A Propriedade**: O que eu quero mudar nele? (Ex: a cor do texto, o tamanho da fonte);

3. **O Valor**: Como deve ficar? (Ex: azul, 20px).

A estrutura básica de qualquer código CSS sempre vai ter essa cara:

```CSS
seletor {
    propriedade: valor;
}
```

## Os 3 Seletores Básicos

Para começarmos a praticar, precisamos conhecer três formas de apontar para um elemento HTML.

1. **Seletor de Tag (O mais geral)**

Afeta **todos** os elementos daquela tag na página.

* **No HTML:** ```<p>Olá, mundo!</p>```
* **No CSS:**

    ```CSS
    P {
        color: blue; /* Deixa o texto de TODOS os parágrafos azul */
    }    
    ```

2. **Seletor de Classe (O mais usado no dia a dia)**

Você cria um "apelido" para um elemento. Vários elementos diferentes podem ter a mesma classe. No CSS, a gente avisa que é uma classe usando um ponto (```.```) antes do nome.

* **No HTML:** ```<p class="texto-destaque">Este parágrafo é especial.</p>```
* **No CSS:**

    ```CSS
    .texto-destaque {
        color: green; /* Deixa verde apenas quem tem essa classe */
    }
    ```

3. **Seletor de ID (O mais específico)**

É como o CPF do elemento: deve ser único na página inteira. No CSS, a gente avisa que é um ID usando a hashtag (```#```).

* **No HTML:** ```<h1 id="titulo-principal">Meu Site</h1>```

* **No CSS:**

    ```CSS
    #titulo-principal {
        font-size: 32px; /* Muda o tamanho da fonte apenas desse título */
    }
    ```