function sayMyName(name) {
    return 'Kleber';
}


function calculaMaioridade(idade){
    if(idade >= 18) {
        console.log(sayMyName('Kleber') + ', você é maior de idade');
    } else {
        console.log(sayMyName('Kleber') + ', você não é maior de idade');
    }
}

calculaMaioridade(18);