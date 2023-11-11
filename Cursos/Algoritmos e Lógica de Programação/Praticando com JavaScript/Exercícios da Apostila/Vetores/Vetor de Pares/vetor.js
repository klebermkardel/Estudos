// Cria vetor que armazena os números
let nums = []

// Lê e armazena os números no vetor
for(i = 0; i < 10; i++) {
    let num = parseInt(prompt(`Digite o ${i + 1}º número:`))
    nums.push(num)
}

// Mostra o vetor inteiro na tela
console.log("Vetor inteiro:")
console.log(nums)

console.log("------")

// Verifica se o número é par e mostra sua posição
for(i = 0; i < nums.length; i++) {
    if(nums[i] % 2 === 0) {
        console.log(`O valor ${nums[i]} é par e está na posição ${i}`)
    }
}