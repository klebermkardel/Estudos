const somar = (numeroA, numeroB) => {
    const resultado = numeroA + numeroB;
    return resultado;
};

console.log(somar(10, 5)); // Saída: 15

// Se a função tem apenas UMA linha que é o 'return', podemos simplificar ainda mais:
const subtrair = (numeroA, numeroB) => numeroA - numeroB;

console.log(subtrair(20, 5)); // Saída: 15