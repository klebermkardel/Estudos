// Estruturas Condicionais (if, else, else if)

let idade = 10;

// Estrutura if (se)

console.log("Estrufura If");

if(idade < 13) {
    console.log("Criança");
}

// Estrutura else (se - senão)

idade = 16;

console.log("----------------");
console.log('Estrutura else');

if(idade < 13) {
    console.log("Criança");
} else {
    console.log("Adulto");
}

// Estrutura else if (se- senão - senão)

console.log("----------------");
console.log('Estrutura else if');

if(idade < 13) {
    console.log("Criança");
} else if(idade < 20) {
    console.log("Adolescente");
} else {
    console.log("Adulto");
}