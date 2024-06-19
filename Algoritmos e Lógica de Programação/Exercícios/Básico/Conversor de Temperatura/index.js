// Converta uma temperatura de graus Celsius para Fahrenheit. A fórmula de conversão é: F = (C * 9/5) + 32.

const C = parseFloat(prompt("Qual a temperatura em ºC que deseja converter?"))

const F = (C * 9/5) + 32

alert(`${C}ºC = ${F}ºF`)