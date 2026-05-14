/*

Desafio de Prática: Menu de Treinos

Vamos criar um pequeno seletor para o seu treino de basquete. Tente escrever esse código no console:

Crie uma variável tipoDeTreino (ex: "arremesso", "drible", "defesa").

Crie um switch que verifique essa variável.

Se for "arremesso": exiba "Praticar 50 lances livres".

Se for "drible": exiba "Treinar zigue-zague entre cones".

Se for "defesa": exiba "Focar em posicionamento e rebote".

Default: exiba "Treino de condicionamento físico geral".

*/

// Declaração de variáveis
const tipodeTreino = "arremesso"

// Estrutura condicional
switch(tipodeTreino) {
    case "arremesso":
        console.log("Praticar 50 lances livres.")
        break
    case "drible":
        console.log("Treinar zigue-zague entre cones.")
        break
    case "defesa":
        console.log("Focar em posicionamento e rebote.")
        break
    default:
        console.log("Treino de condicionamento físico geral.")
}