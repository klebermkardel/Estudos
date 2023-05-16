const num = 0;

const numDivisivelPor5 = (num % 5) === 0;

console.log(num);

if(num === 0){
    console.log('O número é inválido');
} else if(numDivisivelPor5) {
    console.log('Sim');
}else {
    console.log('Não');
}