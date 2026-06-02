/*

Desafio Inicial de Objetos

Crie um objeto chamado vagaDeEmprego.

Adicione as propriedades: empresa (string), cargo (string) e requisitos (um array com 3 tecnologias que você estuda).

Na linha de baixo, mude o cargo para "Desenvolvedor JavaScript Júnior".

Use o console.log() para exibir uma frase usando o Template String, acessando a empresa, o cargo e listando os requisitos unificados por vírgula (use o .join(', ') que você aprendeu).

*/

const vagaDeEmprego = {
    empresa: "Google",
    cargo: "Dev",
    requisitos: ["HTML", "CSS", "JavaScript"]
}

vagaDeEmprego.cargo = "Desenvolvedor JavaScript Júnior"

console.log(`Vaga de ${vagaDeEmprego.cargo} na empresa ${vagaDeEmprego.empresa}\nRequisitos: ${vagaDeEmprego.requisitos.join(', ')}`)