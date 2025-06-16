// Função que mostra o horário atual formatado
function mostrarHorario() {
    const now = new Date(); // Cria um objeto com a data e hora atual

    // Extrai hora, minutos e segundos
    const hour = String(now.getHours()).padStart(2, '0');     // padStart garante dois dígitos
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    // Exibe o horário formatado no console
    console.log(`${hour}:${minutes}:${seconds}`);
}

// Exibe o horário uma vez ao rodar o programa
mostrarHorario();

// Atualiza o horário a cada 1 segundo (1000 ms)
// A função mostrarHorario será chamada continuamente a cada segundo
setInterval(mostrarHorario, 1000);