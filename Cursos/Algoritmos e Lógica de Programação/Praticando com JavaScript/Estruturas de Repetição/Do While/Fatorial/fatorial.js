
N = parseInt(prompt("Digite um número: "))
C = N
F = 1

do {
    F = F * C
    C--
} while (C >= 1)

alert(`O valor do fatorial de ${N} é igual a ${F}`)