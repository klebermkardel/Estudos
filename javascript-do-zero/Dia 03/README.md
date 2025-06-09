# 📅 Dia 03 – Laços de Repetição (Loops)

> Hoje aprendi como repetir tarefas com estruturas de laço em JavaScript, essenciais para automações, contagens e iterações sobre dados.

---

## 📚 Conteúdo Estudado

### 🔁 `for`
Loop com contador definido.

```js
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

### 🔁 ``while``
Loop que repete enquanto a condição for verdadeira.

```js
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}
```

### 🔁 ``do...while``
Executa ao menos uma vez, mesmo que a condição seja falsa.

```js
let x = 10;
do {
  console.log(x);
  x++;
} while (x < 10);
```

### 🛑 ``break`` e ``continue``
break: encerra o loop.

continue: pula a iteração atual.`

### 🧪 Mini Projeto
🔹 Contador regressivo múltiplo de 3:

```js
for (let i = 10; i >= 1; i--) {
  if (i % 3 === 0) {
    console.log(i);
  }
}
```

🔹 Soma dos múltiplos de 5 entre 1 e 50:

```js
let soma = 0;
for (let i = 1; i <= 50; i++) {
  if (i % 5 === 0) {
    soma += i;
  }
}
console.log(soma);
```
