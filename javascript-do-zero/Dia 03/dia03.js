/* 
  Dia 03 - Laços de Repetição
  Autor: Kleber
  Data: 2025-06-10
*/

// -------------------------------------------
// 🔹 Loop FOR - mais usado para repetições controladas
// -------------------------------------------

// Exemplo: Contar de 1 a 5
for (let i = 1; i <= 5; i++) {
  console.log(`FOR: Contando... ${i}`);
}

// Exemplo: Tabuada do 3
const numero = 3;
for (let i = 1; i <= 10; i++) {
  console.log(`${numero} x ${i} = ${numero * i}`);
}

// -------------------------------------------
// 🔹 Loop WHILE - repete enquanto a condição for verdadeira
// -------------------------------------------

let contador = 1;

while (contador <= 5) {
  console.log(`WHILE: Contando... ${contador}`);
  contador++;
}

// -------------------------------------------
// 🔹 Loop DO...WHILE - executa ao menos uma vez
// -------------------------------------------

let x = 6;

do {
  console.log(`DO WHILE: valor de x = ${x}`);
  x++;
} while (x <= 5); // Executa uma vez mesmo que a condição seja falsa

// -------------------------------------------
// 🔹 break e continue
// -------------------------------------------

// break: interrompe o loop
for (let i = 1; i <= 10; i++) {
  if (i === 4) break;
  console.log(`BREAK: ${i}`);
}

// continue: pula a iteração atual
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(`CONTINUE: ${i}`);
}

// -------------------------------------------
// 🧪 Mini Projeto: Contador Regressivo com Múltiplos de 3
// -------------------------------------------

console.log("Contagem regressiva de 10 até 1, mostrando apenas múltiplos de 3:");

for (let i = 10; i >= 1; i--) {
  if (i % 3 === 0) {
    console.log(i); // Mostra 9, 6, 3
  }
}

// Soma de múltiplos de 5 entre 1 e 50
let soma = 0;

for (let i = 1; i <= 50; i++) {
  if (i % 5 === 0) {
    soma += i;
  }
}
console.log(`Soma dos múltiplos de 5 entre 1 e 50: ${soma}`);
