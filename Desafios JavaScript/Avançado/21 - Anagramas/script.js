function saoAnagramas(str1, str2) {
    const ord = s => s.toLowerCase().split("").sort().join("")
    return ord(str1) === ord(str2)
}

const str1 = "Amor"
const str2 = "Roma"

console.log(saoAnagramas(str1, str2))