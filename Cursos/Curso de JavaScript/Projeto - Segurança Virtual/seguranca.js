function verificarEntrada() {
    nomeConvidado = document.getElementById('nome').value 
    convidadosJoao = ['Kleber', ['Camila'], ['Nicolas'], ['Luana'], ['Jess'], ['Dani']]
    if(convidadosJoao.includes(nomeConvidado)) {
        document.getElementById('permissaoDeEntrada').innerText = 'Você pode entrar!'
    } else {
        document.getElementById('permissaoDeEntrada').innerHTML = 'Você não pode entrar!'
    }
}