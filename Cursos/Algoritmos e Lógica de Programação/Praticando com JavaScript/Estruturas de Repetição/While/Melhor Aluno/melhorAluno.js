const totalAlunos = parseInt(prompt("Informe o número de alunos na turma:"));

let nomeAlunoMaiorNota = "";
let maiorNota = -1;

let contador = 1;

while (contador <= totalAlunos) {
  const nomeAluno = prompt(`Informe o nome do aluno ${contador}:`);
  
  const notaAluno = parseFloat(prompt(`Informe a nota do aluno ${nomeAluno}:`));
  
  if (notaAluno > maiorNota) {
    maiorNota = notaAluno;
    nomeAlunoMaiorNota = nomeAluno;
  } else if (notaAluno === maiorNota) {
    nomeAlunoMaiorNota += `, ${nomeAluno}`;
  }
  
  contador++;
}

console.log(`A maior nota obtida foi ${maiorNota}.`);
console.log(`Os alunos com a maior nota são: ${nomeAlunoMaiorNota}`);
