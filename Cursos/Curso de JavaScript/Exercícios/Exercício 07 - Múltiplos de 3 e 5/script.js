// Criar função somar que retorna a
// soma de todos os múltiplos de 3 e 5

// Múltiplos de 3: 3, 6 e 9 com limite até 10
// Múltiplos de 5: 5 e 10 com limite até 10

// Somando os múltiplos

// Armazenar múltiplos de 3
// Armazenar múltiplos de 5
// Somar os dois

somar(10)
function somar(limite) {
    let multiplosDe3 = 0
    let multiplosDe5 = 0
    for(i = 0; i <= limite; i++) {
        if(i % 3 === 0) 
           multiplosDe3 += i
           if(i % 5 === 0) 
            multiplosDe5 += i          
    }
    console.log(multiplosDe3 + multiplosDe5)
}

