function debounce(fn, delay) {
  let timer

  return function(...args) {
    clearTimeout(timer)
    timer = setTimeout(() => fn(...args), delay)
  }
}

function buscar(termo) {
  console.log(`Buscando por: ${termo}`)
}

const buscarComDebounce = debounce(buscar, 5000)

buscarComDebounce("M")
buscarComDebounce("Ma")
buscarComDebounce("Mac")