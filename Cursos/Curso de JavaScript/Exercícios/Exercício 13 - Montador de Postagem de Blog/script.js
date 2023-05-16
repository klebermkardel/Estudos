// Exercício - Objeto Postagem de Blog

let post = {
    titulo: 'a',
    mensagem: 'b',
    autor: 'c',
    visualizacoes: 10,
    comentarios: [
        {autor: 'a', mensagem: 'b'},
        {autor: 'a', mensagem: 'b'}
    ],
    estaAoVivo: true
}

console.log(post)

console.log('---------------------------------')

function Postagem(titulo, mensagem, autor) {
    this.titulo = titulo,
    this.mensagem = mensagem,
    this.autor = autor,
    this.visualizacoes = 0,
    this.comentarios = [],
    this.estaAoVivo = false
}

let postagem = new Postagem('a', 'b', 'c')
console.log(postagem)