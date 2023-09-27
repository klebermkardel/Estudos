let B = [];
let cad;
let r;

function mostraFileira() {
    for (let i = 1; i <= 10; i++) {
        if (B[i] === "") {
            console.log(`[ B${i < 10 ? '0' : ''}${i} ]`);
        } else {
            console.log("[ --- ]");
        }
    }
    console.log("------------------------------------------------------------------------");
}

do {
    console.clear();
    mostraFileira();
    cad = parseInt(prompt("Reservar a cadeira: B"));
    if (B[cad] === "") {
        B[cad] = "X";
        console.log(`Cadeira B${cad < 10 ? '0' : ''}${cad} RESERVADA!`);
    } else {
        console.log("ERRO: Lugar Ocupado!");
    }
    r = prompt("Quer reservar outro? [S/N]").toUpperCase();
} while (r === "S");
