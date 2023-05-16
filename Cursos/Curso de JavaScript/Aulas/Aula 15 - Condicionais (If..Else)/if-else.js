//If..Else

// Se a hora estiver entre 06:00 até 12:00: Bom dia!
// Se estiver entre 12:00 até 18:00: Boa tarde!
// Caso contrário: Boa noite!

const horaAtual = new Date().getHours(); // Obtém a hora atual do sistema

console.log(horaAtual)

if (horaAtual > 6 && horaAtual < 12) {
  console.log("Bom dia!");
} else if (horaAtual > 12 && horaAtual < 18) {
  console.log("Boa tarde!");
} else {
  console.log("Boa noite!");
}