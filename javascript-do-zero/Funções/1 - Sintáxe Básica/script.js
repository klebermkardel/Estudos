function saudacao() {
    console.log("Bom dia, Kleber! Vamos estudar JavaScript!")
}

saudacao()

function mostrarHorario() {
    const now = new Date()
    const hour = String(now.getHours()).padStart(2, '0')
    const minutes = String(now.getMinutes()).padStart(2, '0')
    const seconds = String(now.getSeconds()).padStart(2, '0')

    console.log(`${hour}:${minutes}:${seconds}`)
}

mostrarHorario()
setInterval(mostrarHorario, 1000)