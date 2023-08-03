// Avançando em JavaScript

// Promises


const promessa = new Promise((resolve, reject) => {
    const condicao = false;

    if(condicao) {
    resolve("A condição é verdadeira")
    } else {
        reject("A condição é falsa")
    }
});

// Executa (resolve) caso condição seja verdadeira e não executa (reject) caso seja falsa
promessa.then((mensagem) => {
    console.log(mensagem);
})
// mas caso queira exibir a mensagem de condição falsa, usar o catch
.catch((erro) => {
    console.log(erro)
})

// Bibliotecas feitas que são "promise based"

const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, "testando")
})

Promise.all([promise1, promise2]).then((valores) => console.log(valores));