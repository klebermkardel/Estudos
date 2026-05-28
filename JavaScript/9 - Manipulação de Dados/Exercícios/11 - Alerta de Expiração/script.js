/*

Alerta de Expiração de Vaga: 

Uma vaga de emprego expira no mês 6 (Junho). Crie um objeto de data atual (new Date()). Extraia o mês atual usando o método correto (lembre-se do ajuste do +1) e faça um if que verifique: se o mês atual for maior ou igual a 6, exiba "Vaga Expirada", senão, "Vaga Ativa".

*/

// Captura a data e o horário atual do sistema operacional
const dataAtual = new Date();

// Obtém o mês corrente ajustando o índice (JavaScript conta meses de 0 a 11)
const mesAtual = dataAtual.getMonth() + 1;

// Valida se o mês atual já atingiu ou passou do prazo limite (Junho = 6)
if (mesAtual >= 6) {
    console.log("Vaga Expirada");
} else {
    console.log("Vaga Ativa");
}