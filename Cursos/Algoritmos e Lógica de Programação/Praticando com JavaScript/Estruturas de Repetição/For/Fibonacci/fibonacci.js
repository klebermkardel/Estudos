let t1 = 0
console.log(t1)

let t2 = 1
console.log(t2)

let t3

for(c = 3; c <= 15; c++) {
    t3 = t1 + t2
    console.log(t3)
    t1 = t2
    t2 = t3
}