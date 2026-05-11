function agrupar(arr) {
  return arr.reduce((acc, item) => {
    if (!acc[item.categoria]) {
      acc[item.categoria] = []
    }
    acc[item.categoria].push(item)
    return acc
  }, {})
}

const produtos = [
    { nome: "Camiseta", categoria: 'roupa' },
    { nome: "Celular", categoria: "tech" },
    { nome: "Sapato", categoria: "calçado" },
    { nome: "Calça", categoria: "roupa" },
    { nome: "Notebook", categoria: "tech" },
    { nome: "Sandália", categoria: "calçado" } 
]

console.log(agrupar(produtos))