// Praticando JavaScript - Execício 6: FizzBuzz

// Escreva um programa que itere de 1 a 20. Para cada iteração, verifique se o número atual é divisível por 3 e por 5. Se for, exiba "FizzBuzz" no console. Se for apenas divisível por 3, exiba "Fizz", e se for apenas divisível por 5, exiba "Buzz".

for(i = 1; i <= 20; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}