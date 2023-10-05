let idade;
let totalIdades = 0;
let contadorAlunos = 0;

while (true) {
    idade = parseInt(prompt("Digite a idade do aluno (ou 999 para encerrar):"));

    if (idade === 999) {
        break; 
    }

    totalIdades += idade;
    contadorAlunos++;
}

if (contadorAlunos === 0) {
    alert("Nenhuma idade foi inserida.");
} else {
    let mediaIdade = totalIdades / contadorAlunos;
    alert(`Total de alunos: ${contadorAlunos}\nMédia de idade: ${mediaIdade.toFixed(2)}`);
}
