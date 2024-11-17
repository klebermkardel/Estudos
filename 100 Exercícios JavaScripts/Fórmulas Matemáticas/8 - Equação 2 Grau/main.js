/*Escreva um programa que calcule a equação de segundo grau (ax² + bx + c = 0) utilizando as fórmulas de Bhaskara. */

let discriminante = Math.pow(b, 2) - 4 * a * c;

if(discriminante > 0) {
    let raiz1 = (-b + Math.sqrt(discriminante)) / (2 * a);
    let raiz2 = (-b - Math.sqrt(discriminante)) / (2 * a);

    console.log(`As raizes reais são: ${raiz1} e ${raiz2}`);
} else if (discriminante === 0) {
    let raiz = -b / (2 * a);
    
    console.log(`A raiz real é: ${raiz}`)
} else {
    console.log("A equação não possui raizes reais")
}

