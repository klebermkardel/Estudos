// Leia um número N e exiba a soma de todos os números de 1 até N.

let soma = 0;

const n = parseInt(prompt("Quantos números deseja somar?"));

for(i = 1; i <= n; i++) {
    let num = parseInt(prompt(`Informe o ${i}º número:`))

    soma += num
}

alert(`A soma total dos valores informados foi de ${soma}`)