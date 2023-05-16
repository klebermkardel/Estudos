// Operadores de Igualdade

// Igualdade Estrita (Compara valores e tipo)
console.log(1 === 1) // retorna true
console.log(1 === 2) // retorna false
console.log("1" === 1) // retorna false
console.log("1" === "1") // retorna true

// Igualdade solta (Compara apenas valores e converte-os se necessário) NÃO RECOMENDADO USAR

console.log(1 == 1) // retorna true
console.log("1" == 1) // retorna true pois o valor é igual
console.log("um" == 1) // retorna false pois "um" é diferente de "1"