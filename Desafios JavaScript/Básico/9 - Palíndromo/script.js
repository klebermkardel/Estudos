function verificarPalindromo(str) {
    const strNormalizada = str.toLowerCase()
    const inv = strNormalizada.split("").reverse().join("")
    return strNormalizada === inv
}

console.log(verificarPalindromo("Ana"))   // true
console.log(verificarPalindromo("Kleber")) // false