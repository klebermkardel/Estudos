// Pares e Ímpares: Use um laço for para iterar de 1 a 20. Dentro do laço, use uma estrutura condicional (if) para verificar se o número é par ou ímpar e imprima uma mensagem correspondente (ex: "O número 5 é Ímpar.").

for(let i = 1; i <= 20; i++) {
    if(i % 2 === 0) {
        console.log(`O número ${i} é par`);
    } else {
        console.log(`O número ${i} é ímpar`);
    }
}