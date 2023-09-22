let N, C;

N = prompt("Digite seu nome: ");

console.log(`Total de letras do seu nome: ${N.length}`);
console.log(`Seu nome em maiúsculas é ${N.toUpperCase()}`);
console.log(`Seu nome em minúsculas é ${N.toLowerCase()}`);
console.log(`A primeira letra do seu nome é ${N.charAt(0)}`);
console.log(`A última letra do seu nome é ${N.charAt(N.length - 1)}`);
console.log(`Seu nome tem a letra 'A' na posição ${N.toUpperCase().indexOf("A") + 1}`);
console.log(`O código da letra 'c' é ${'c'.charCodeAt(0)}`);
console.log(`A letra de código 67 é ${String.fromCharCode(67)}`);

let reversedName = '';
for (C = N.length; C >= 1; C--) {
  reversedName += N.charAt(C - 1).toUpperCase();
}

console.log(`Seu nome em ordem reversa é ${reversedName}`);
