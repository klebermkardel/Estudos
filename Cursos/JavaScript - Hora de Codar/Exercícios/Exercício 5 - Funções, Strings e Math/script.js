// Exercícios de Fundamentos

/* Exercício 5 - Funções, Strings e Math

Crie uma função que aceita uma string representando um horário no formato de 24 horas (por exemplo, "14:30"). A função deve retornar uma string que converta o horário para o formato de 12 horas (por exemplo, "2:30 PM"). Use o objeto Math para auxiliar nesta conversão. Certifique-se de que sua função lida corretamente com horários na meia-noite e no meio-dia.

*/

function converterHorario(horario24h) {
    // Divide a string do horário em horas e minutos
    const [horasStr, minutosStr] = horario24h.split(':');
    let horas = parseInt(horasStr, 10);
    const minutos = parseInt(minutosStr, 10);
  
    // Verifica se é AM ou PM
    const periodo = horas >= 12 ? 'PM' : 'AM';
  
    // Converte as horas para o formato de 12 horas
    horas = horas % 12 || 12;
  
    // Formata a saída no formato desejado
    return `${horas}:${minutos.toString().padStart(2, '0')} ${periodo}`;
  }
  
  // Testando a função
  console.log(converterHorario("14:30")); // Saída: "2:30 PM"
  console.log(converterHorario("00:45")); // Saída: "12:45 AM"
  console.log(converterHorario("12:00")); // Saída: "12:00 PM"
  console.log(converterHorario("23:15")); // Saída: "11:15 PM"