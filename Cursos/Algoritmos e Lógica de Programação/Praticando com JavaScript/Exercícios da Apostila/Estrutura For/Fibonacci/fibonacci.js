let a = 1;
let b = 1;
let msg = ""

for (i = 1; i <= 10; i++) {
    msg += `${a} `;
    let temp = a;
    a = b;
    b = temp + b;
}

alert(msg)
