let amigo = {nome: 'Kleber', 
sexo: 'M', 
peso: 103.0,
engordar(p=0){
    console.log('Engordou!')
    this.peso += p
}}

amigo.engordar(10)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)
