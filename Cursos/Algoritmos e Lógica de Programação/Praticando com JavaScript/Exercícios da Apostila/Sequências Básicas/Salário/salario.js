/* 3) Crie um programa que leia o nome e o salário de um funcionário, mostrando no
final uma mensagem.
Ex:
Nome do Funcionário: Maria do Carmo
Salário: 1850,45
O funcionário Maria do Carmo tem um salário de R$1850,45 em Junho. */

function getData() {
    const nome = document.getElementById("nameInput").value;
    const sal = parseFloat(document.getElementById("salInput").value);

    let meses = [
        "janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro" 
    ];

    let dataAtual = new Date();
    let mesAtual = dataAtual.getMonth();

    let nomeMesAtual = meses[mesAtual];

    // Atualizar o conteúdo da div com id "msg"
    let resposta = `Nome de funcionárie: ${nome}<br>
                    Salário: R$ ${sal.toFixed(2)}<br>
                    U funcionárie ${nome} tem um salário de R$ ${sal.toFixed(2)} em ${nomeMesAtual}`;

    document.getElementById("msg").innerHTML = resposta;

    // Adicionar a animação para exibir a resposta
    document.getElementById("msg").style.transform = "translate(-50%, -50%) scale(1)";
}
