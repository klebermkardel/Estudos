// Cria vetor que armazena os números
let nums = []

// Lê e armazena os números no vetor
for(i = 0; i < 15; i++) {
    let num = parseInt(prompt(`Digite o ${i + 1}º número:`))
    nums.push(num)
}

// Mostra o vetor inteiro na tela
console.log("Vetor inteiro:")
console.log(nums)

console.log("------")

// Verifica e mostra as posições dos valores múltiplos de 10
for(i = 0; i < nums.length; i++) {
    if(nums[i] % 10 === 0) {
        console.log(`O valor ${nums[i]} na posição ${i} é múltiplo de 10`)
    }
}