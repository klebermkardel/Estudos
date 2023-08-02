// Fundamentos - Escopo de Variáveis

// Escopo Global
let cor = "azul";

function mostrarCor() {
    // Escopo Local
    let cor = "verde";
    console.log(cor);
}

console.log(cor);

mostrarCor();

// Hoisting = Içamento
testeHoisting();

function testeHoisting() {
    console.log("Testando Hoisting");
}