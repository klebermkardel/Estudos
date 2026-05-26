# Manipulação de Dados

## Strings e Números

1. Strings

No dia a dia, os textos que vêm do banco de dados ou do usuário nunca vêm perfeitos. Aqui estão os métodos que você **precisa** ter no seu cinto de **utilidades**:

* ```trim()```: Remove os espaços fantasmas do início e do fim.
* ```.replace(procurar, substituir)```: Substitui a **primeira** ocorrência de um texto por outro.
* ```.replaceAll(procurar, substituir)```: Substitui **todas** as ocorrências 
* ```.includes(termo)```: Devolve ```true``` ou ```false``` se o texto contiver o termo pesquisado (ótimo para sistemas de busca simples).
* ```.split(separador)```: Quebra uma string em um array de pedaços. 

```js
const textoSujo = "  Estudar JavaScript é muito bom!   "

// Limpando e substituindo
const textoLimpo = textoSujo.trim().replace("JavaScript", "JS")
console.log(textoLimpo) // "Estudar JS é muito bom!"

// Buscando um termo dentro da string
console.log(textoLimpo.includes("JS)) // true

// Quebrando uma frase em uma lista de palavras pelo espaço
const palavras = tetoLimpo.split(" ")
console.log(palavras) // [ 'Estudar', 'JS', 'é', 'muito', 'bom!']
```

2. Números e Precisão Monetária

Computadores são terríveis com precisão de centavos. Por isso, controlar as casas decimais e a exibição é vital.

* ```.toFixed(x)```: Trava o número em ```x``` casas decimais. Atenção: Ele transforma o seu número em uma ```string```.
* ```Number(valor)```: Transforma uma string em número legítimo. Se não conseguir, ele devolve ```NaN``` (*Not a Number*)
* ```Number.isIntenger(valor)```: Checa se o número é inteiro ou se tem quebra decimal (devolve ```true``` ou ```false```).

```js
const precoAnterior = "49.9999"
const precoConvertido = Number(precoAnterior)

console.log(precoConvertido.toFixed(2)) // "50.00" (Arredondou e virou String!)
console.log(Number.isIntenger(precoConvertido)) // false (Porque tem decimais)
```

3. O Objeto ```Math``` 

O JavaScript tem um assistente matemático global chamado ```Math```. Ele possui métodos estáticos para resolver problemas de arredondamento e sinais:

* ```Math.abs(x)```: Retorna o valor absoluto (ignora o sinal de menos e deixa o número sempre positivo).
* ```Math.ceil(x)```: Arredonda o número para cima* (teto), não importa os centavos. Ex: ```4.1``` vira ```5```.
* ```Math.floor(x)```: Arredonda o número para baixo (chão). Ex: ```4.9``` vira ```4```.
* ```Math.round```: Arredonda de forma matemática traidicional (se os centavos forem de ```.0``` a ```.4```, arredonda para baixo. Se for de ```.5``` a ```.9```, arredonda para cima).

```js
console.log(Math.abs(-150)) // 150 (Gasto virando valor absoluto)

console.log(Math.ceil(4.1)) // 5 (Útil para paginação se sistemas: se deu 4.1 páginas, você precisa de 5)
console.log(Math.floor(4.9)) // 4 (Ignora os centavos completamente)
console.log(Math.round(4.4)) // 4
console.log(Math.round(4.5)) // 5
```

3. ```toLocaleString()```

Esse método serve para formatar dados de acordo com a cultura de um país (moedas, datas, percentuais). No Brasil, usamos o ponto para milhares e a vírgula para centavos (1.000,00), Nos Estados Unidos, é o oposto (1,000.00). O toLocaleString resolve isso.

A anatomia dele para moedas é sempre: ```numero.toLocaleString('idioma-PAIS', { propriedades })```

```js
const salarioDev = 5500.45

// Formatação Padrão Brasil
console.log(salarioDev,toLocaleString('pt-BR')) // "5.500,45 (Apenas separadores)

// Formatação Monetária Completa Brasil (Moeda Real)
console.log(salarioDev.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })) // Resultado: "R$ 5.500,45"

// Formatação Monetária Estadunidense (Dólar)
console.log(salarioDev.toLocaleString('en-US', { style: 'currency', currency: 'USD' }))
```

## Datas e Horários

Em JavaScript, para manipulçar tempo, nós usamos um cara chamado ```Date```. O ```Date``` é, nativamente, um **Objeto** (*veremos o que são Objetos no próximo tópico*) embutido do sistema. Mas a forma como extraímos os dados dele se parece muito com os métodos de manipulação de strings e números que acabamos de ver.

### O Objeto ```Date``` e o Tempo no JavaScript

Para começar a trabalhar com o tempo, precisamos "instanciar" (criar) uma nova data. O JavaScript captura o horário atual do sistema operacional quando fazemos isso:

```js
const agora = new Date() // Cria o objeto de data com o eato segundo atual

console.log(agora) // Vai cuspir algo como: 2026-05-26T14:12:20:000Z (Formato padrão ISO internacional)
```

Como esse formato padrão é bem feio e difícil de ler, o objeto ```Date``` nos dá duas ferramentas: os métodos de **Eztração** (para pegar partes da data) e os de **Formatação** (para exibir bonito na tela).

1. Extraindo pedaços do tempo (Os métodos ```get```)

Imagine que você quer criar uma mensagem dizendo apenas o ano atual, ou que dia da semana é. O Objeto ```Date``` possui métodos específicos para "pescar" essas informações

* ```.getFullYear()```: Pega o ano com 4 dígitos (ex: ```2026```).
* ```.getMonth()```: Pega o mês, **mas atenção: começa do 0!** (Janeiro é ```0```, Fevereiro é ```1```... Maio é ```4```). Para corrigir, sempre somamos ```+ 1```.
* ```.getDate()```: Pega o dia do mês (de ````1``` a ```31```).
* ```.getDay()```: Pega o dia da semana em formato numérico: (Domingo é ```0```, Segunda é ```1```, Terça é ```2```...).
* ```.getHours()``` / ```.getMinutes()```: Pegam a hora e os minutos atuais.

```js
const data = new Date()

const dia = data.getDate()
const mes = data.getGetMonth + 1 // Somamos 1 para não ficar com o mês atrasado
const ano = data.getFullYear()

console.log(`Hoje é dia: ${dia}/${mês}/${ano}`) // "Hoje é dia: 26/5/2026
```
2. Formatação Profissional com ```toLocaleString()```

Lembra do métodos que usamos para formatar moedas em ```R$``` no último exercício? O mesmo ```toLocaleString()``` é o rei da formatação de datas em JavaScript! Ele pega aquele formato internacional esquisito e traduz para o padrão de qualquer país automaticamente.

Olha como ele simplifica sua vida sem precisar ficar somando strings:

```js
const hoje = new Date()

// 1. Formatação padrão brasileira (Data e Hora)
console.log(hoje.toLocaleString('pt-BR')) // Resultado: "26/05/2026 11:12:20"

// 2. Apenas a data
console.log(hoje.toLocalDateString('pt-BR')) // Resultado: "26/05/2026"

// 2. Apenas o horário
console.log(hoje.toLocaleTimeString('pt-BR')) // Resultado: "11:12:20"
```

3. Customização Avançada (O Objeto de Opções)

Você também pode passar configurações para o ```toLocaleString``` escrever a data por extenso, ideal para gerar relatórios profissionais

```js
const opcoes = {
    weekday: 'long', // Dia da semana por extenso (ex: "terça-feira")
    year: 'numeric',
    month: 'long', // Mês por extenso (ex: "maio")
    day: 'numeric'
}

console.log(hoje.toLocaleDateString('pt-BR', opcoes))
// Resultado: "terça-feira, 26 de maio de 2026"
```