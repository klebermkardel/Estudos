// Aula 26 - Arrow Functions

const marcas = [
    {id: 1, nome: 'a'},
    {id: 2, nome: 'b'},
    {id: 3, nome: 'c'}
]

// Código sem usar Arrow Functions
function isA(marca) {
    return marca.nome === 'a'
}
console.log(marcas.find(isA))

// Código usando Arrow Functions
const isB = marca => marca.nome === 'b';

console.log(marcas.find(isB));