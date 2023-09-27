let nome = []
let n1 = []
let n2 = []
let m = []
let sm = 0 
let mt = 0 
let tot = 0 

for (let i = 1; i <= 4; i++) {
    nome.push(prompt(`Digite o nome do aluno ${i}:`))
    n1.push(parseFloat(prompt(`Digite a primeira nota do aluno ${i}`)))
    n2.push(parseFloat(prompt(`Digite a segunda nota do aluno ${i}`)))
    m.push((n1[i - 1] + n2[i - 1]) / 2) 
    sm = sm + m[i - 1] 
}

mt = sm / 4

console.log("Lista de Alunos:")

for (let i = 0; i < 4; i++) {
    console.log(`Nome: ${nome[i]}, Média: ${m[i]}`) 
    if (m[i] > mt) {
        tot++
    }
}

console.log(`Ao todo temos ${tot} acima da média que é ${mt}`)
