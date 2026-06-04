# Async / Await

A sintaxe do ```.then()``` e ```.catch``` que vimos antes funciona super bem, mas quando começamos a colocar muitas promessas dentro da outra, o código vira uma bagunça difícil de ler (o mercado chama isso carinhosamento de *Callback Hell*).

Para resolver isso, o JavaScript criou o ```async / await```: uma forma de escrever código assíncrono que se parece exatamente com o código síncrono que você já escreve.

## Como funciona o ```async/await```?

Tudo se resume a duas palavras chaves:

1. ```async``` **(Assíncrono)**: Você coloca essa palavra antes da definição de uma função. Ela avisa ao JavaScript: *"Ei, essa função vai executar tarefas que demora, blz?"*.

2. ```await``` **(Aguarde)**: Você só pode usar essa palavra dentro de uma função que seja ```async```. Ela diz para o JavaScript: *"Pare a execução dessa função nesta linha e espere a promessa terminar antes de ir para a próxima"*.

O pulo do gato? Enquanto o JavaScript espera o ```await``` terminar, ele não trava o sistema. Ele simplesmente pausa aquela função específica e vai atender outras partes do site.

## Comparando as duas sintaxes:

Imagine que vamos buscar o perfil de um usuário no banco de dados.

Com o antigo ```.then()```:

```js
function exibirUsuario() {
    buscarNoBanco(1)
        .then(usuario => console.log(usuario))
        .catch(erro => console.error(erro))
}
```

Com o moderno ```async/await```:

```js
async function exibirUsuario() {
    // O código "pausa" na linha de baixo até os dados chegarem
    const usuario = await buscarNoBanco(1)
    console.log(usuario)
}

```
Reparou como a versão ```await``` elimina os blocos de funções em cascata? O dado cai direto na constante ```usuario```, exatamente como uma atribuição normal!

## Tratando Erros com ```try/catch```

Como não temos mais o método ```.catch()``` grudado na função, se a nossa promessa der algum erro (como a internet cair), o sistema quebra.

Para evitar isso, nós abraçamos o nosso código com a estrutura ```try/catch``` (Tente/Pegue)

```js
const carregarDados = async () => {
    try {
        // Tente executar este bloco assíncrono
        const resposta = await buscarDadosNaInternet()
        console.log(resposta)
    } catch (erro) {
        // Se qualquer linha dentro do 'try' der erro, o JS pula direto para cá
        console.error("Ih, deu ruim: ", erro)
    }
}
```

