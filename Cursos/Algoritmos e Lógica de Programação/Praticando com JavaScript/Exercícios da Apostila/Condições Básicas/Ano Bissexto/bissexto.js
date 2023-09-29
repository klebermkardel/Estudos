const ano = parseInt(prompt("Digite o ano:"))

if(ano % 4 === 0) {
    if(ano % 100 !== 0 || ano % 400 === 0) {
        alert(`O ano ${ano} é bissexto`)
    } else {
        alert(`O ano ${ano} não é bissexto`)
    }
} else {
    alert(`O ano ${ano} não é bissexto`)
}