function removerDuplicatas(arr) {
    return [...new Set(arr)]
}

console.log(removerDuplicatas([3, 7, 4, 4, 8, 3]))