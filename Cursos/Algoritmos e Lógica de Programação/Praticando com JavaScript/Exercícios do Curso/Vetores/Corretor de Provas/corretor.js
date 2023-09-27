let gab = [];
let prova = [];
let nome = [];
let nota = [];
let a;
let s = 0;
let m;

function cadastroGabarito() {
    console.log("PASSO 1 - Cadastro de Gabarito ");
    console.log("-------------------------------");
    for (let c = 1; c <= 5; c++) {
        let resposta = prompt(`Questao ${c}: `);
        gab[c] = resposta;
    }
}

function cadastraProva() {
    let notaFinal = 0;
    console.log("RESPOSTAS DADAS");
    for (let c = 1; c <= 5; c++) {
        let resposta = prompt(`Questao ${c}: `);
        prova[c] = resposta;
        if (prova[c].toUpperCase() === gab[c].toUpperCase()) {
            notaFinal += 2;
        }
    }
    return notaFinal;
}

cadastroGabarito();

for (a = 1; a <= 3; a++) {
    console.clear();
    console.log("------------------------");
    console.log(`ALUNO ${a}`);
    console.log("------------------------");
    let alunoNome = prompt("Nome: ");
    nome[a] = alunoNome;
    nota[a] = cadastraProva();
    s += nota[a];
}

console.clear();
console.log("NOTAS FINAIS");
console.log("------------------------------");
for (a = 1; a <= 3; a++) {
    console.log(`${nome[a]}: ${nota[a].toFixed(1)}`);
}

m = s / 3;
console.log("------------------------------");
console.log(`Media da Turma: ${m.toFixed(1)}`);
