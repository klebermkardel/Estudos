/* 

Gerador de Nickname de Jogador

Crie uma função chamada gerarCamisa(nome, numero). Se receber "Kleber" e 23, ela deve transformar o nome em letras maiúsculas e concatenar com o número, retornando "KLEBER_23".

*/

const gerarCamisa = (nome, numero) => {
    const nomeFormatado = nome.toUpperCase()

    const nickname = `${nomeFormatado}_${numero}`

    return nickname
}

console.log(gerarCamisa("Kleber", 23))