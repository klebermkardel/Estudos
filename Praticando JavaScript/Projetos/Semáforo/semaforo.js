const img = document.getElementById('img')
const buttons = document.getElementById('buttons')

const trafficLight = (event) => {
    turnOn[event.target.id]()
}

const turnOn = {
    'red': () => img.src = './img/vermelho.png',
    'yellow': () => img.src = './img/amarelo.png',
    'green': () => img.src = './img/verde.png',
    'automatic': () => setInterval(changecolor, 1000)
}

buttons.addEventListener('click', trafficLight)