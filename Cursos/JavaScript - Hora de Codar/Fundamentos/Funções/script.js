// Fundamentos - Funções

// Estrutura: function nome(argumentos) {corpo}

console.log("Função:")

function cumprimentar(nome) {
    console.log("Olá, " + nome);       
}

cumprimentar("Kleber");

console.log("-----------------");

console.log("Função:");

function contador() {
    for(i = 0; i < 5; i++) {
        console.log(i);
    }
}

contador();

console.log("-----------------");

console.log("Arrow Function:");

const testeArrow = () => console.log("Isso também é uma função");

testeArrow();

console.log("-----------------");

console.log("Arrow Function Contador:");

const testeArrowContador = () => {
    for(i = 0; i < 5; i++) {
        console.log(i);
    }
}

testeArrowContador();