function contarVogais(str) {
    return str.toLowerCase().split("").filter(c => "aeiou".includes(c)).length
}

const str = "Kleber"
console.log(contarVogais(str))