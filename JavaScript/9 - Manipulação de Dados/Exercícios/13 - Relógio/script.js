/*

Relógio do Placar 

Crie um script que pegue o horário atual do sistema e exiba apenas as horas e minutos no formato "HH:MM". (Dica: use extração manual com .getHours() ou configure as propriedades no toLocaleString).

*/

const dataAtual = new Date();

// Executa os métodos getHours() e getMinutes() para isolar o tempo atual do sistema
const horaAtual = `${dataAtual.getHours()}:${dataAtual.getMinutes()}`;

// Exibe o horário do placar no terminal
console.log(horaAtual);