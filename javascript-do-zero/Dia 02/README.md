# 📅 Dia 02 – Controle de Fluxo e Entrada de Dados

> Estudos realizados no segundo dia da jornada de aprendizado em JavaScript do zero, com foco em variáveis, entrada de dados simulada e estruturas de decisão.

---

## 📚 Conteúdo Estudado

### ✅ Declaração de variáveis com `let` e `const`
- `const`: valor fixo que não pode ser alterado.
- `let`: permite alterar o valor depois da declaração.

**Exemplo:**
```js
const nome = "Kleber";
let idade = 29;
idade = 30;
```

### ✅ Simulação de entrada de dados
Como ainda não usamos bibliotecas para entrada via terminal, os dados foram simulados com variáveis fixas.

**Exemplo:**
```js
const nome = "Joana"
const idade = 17
console.log(`Olá, ${nome}. Você tem ${idade} anos.)
```

### ✅ Estruturas de decisão (if, else if, else)
Permite tomar decisões diferentes dependendo de condições

**Exemplo:**
```js
const idade = 16;

if (idade >= 18) {
  console.log("Maior de idade");
} else if (idade === 17) {
  console.log("Quase lá!");
} else {
  console.log("Menor de idade");
}
```

### Operadores Lógicos

- && (E): todas as condições precisam ser verdadeiras

- || (OU): pelo menos uma condição verdadeira

- ! (NÃO): inverte o valor booleano

**Exemplo:**
```js
const idade = 18;
const temDocumento = true;

if (idade >= 18 && temDocumento) {
  console.log("Entrada permitida");
}
```

### 🧪 Mini Projeto: Verificador de Idade
Um exemplo prático de uso de if/else para verificar regras de entrada baseadas na idade:

Regras:

- 18 ou mais → Entrada autorizada

- 16 ou 17 → Entrada com responsável

- Menor que 16 → Entrada negada
