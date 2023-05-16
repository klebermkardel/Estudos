// Laços de Repetição

// Escrever no console 'Estou aprendendo!' 5x (forma não eficiente)

// console.log('Estou aprendendo!')
// console.log('Estou aprendendo!')
// console.log('Estou aprendendo!')
// console.log('Estou aprendendo!')
// console.log('Estou aprendendo!')


// 1. Loop For

for(let i = 5; i >= 1; i--) {
    if(i % 2 !== 0){
        console.log(i)
    }
}

// 2. Loop While

let i = 5

while(i >= 1) {
    if(i % 2 !== 0){
        console.log(i)
    }
    i--
}

