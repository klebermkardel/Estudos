# 🧠 O que são funções?

Funções são blocos de código que executam uma tarefa específica. A ideia é organizar o código e reutilizar trechos que se repetem.

### 📌 Sintaxe básica:

```javascript
function nomedaFuncao() {
    // Bloco de codigo
}
```

### 🧪 Exemplo simples:

```javascript
function saudacao() {
    console.log("Bom dia, João!");
}

// Chamando a função:
saudacao(); // Saída: Bom dia, João!
```

## 🔧 O que são parâmetros?

Parâmetros são valores que você envia para uma função, para ela usar dentro do seu bloco de código.

### 📌 Exemplo:

```javascript
function saudar(nome) {
  console.log(`Olá, ${nome}!`);
}

saudar("Kleber"); // Saída: Olá, Kleber!
saudar("Ana");    // Saída: Olá, Ana!
```

## 🔁 O que é return?

O return serve para devolver um valor da função para quem chamou ela.
Isso é útil quando você quer guardar o resultado em uma variável, ou usá-lo em outros lugares.

### 📌 Exemplo:

```javascript
function somar(a, b) {
  return a + b;
}

const resultado = somar(5, 3);
console.log(resultado); // Saída: 8
```

## 🧱 Parte 3: Funções com múltiplos parâmetros + return

### 📌 Exemplo:

```javascript
function apresentarPessoa(nome, idade, cidade) {
  return `Olá! Meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}.`
}

console.log(apresentarPessoa("Kleber", 29, "São Paulo"))
``` 

## Validação simples dentro da função

É comum validar se os dados são validos antes de executar o cálculo. Exemplo:

```javascript
function dividir(a, b) {
  if(b === 0) {
    return "Erro: divisão por zero!"
  }
  return a/b
}
console.log(dividir(10, 2)) // 5
console.log(dividir(10, 0)) // Erro: divisão por zero!
```