let div3 = 0;
let moreThan5 = 0;
let msg = "Números sorteados: ";
let c = 0;

while (c < 20) {
    let num = Math.floor(Math.random() * 11); // Gera números entre 0 e 10

    if (num % 3 === 0 && num > 5) {
        msg += `{${num}} `;
        div3++;
        moreThan5++
    } else if (num % 3 === 0) {
        msg += `[${num}] `;
        div3++;
    } else if (num > 5) {
        msg += `(${num}) `;
        moreThan5++;
    } 
    else {
        msg += `${num} `;
    }

    c++;
}

msg += `\nQuantidade de números divisíveis por 3: ${div3}`;
msg += `\nQuantidade de números acima de 5: ${moreThan5}`;
alert(msg);
