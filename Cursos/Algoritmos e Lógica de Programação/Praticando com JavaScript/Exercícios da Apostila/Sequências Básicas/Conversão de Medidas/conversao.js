/* Desenvolva um programa que leia uma distância em metros e mostre os valores relativos em outras medidas.

Ex:
Digite uma distância em metros: 185.72

A distância de 185.72m corresponde a:

0.18572Km             1857.2dm
1.8572Hm              18572.0cm
18.572Dam             185720.0mm

*/

const metros = parseFloat(prompt("Digite uma distância em metros:"))

const km = metros / 1000
const hm = metros / 100
const dam = metros / 10
const dm = metros * 10
const cm = metros * 100
const mm = metros * 1000

alert(`A distância de ${metros} corresponde a:
${km}Km        ${dm}dm
${hm}Hm          ${cm.toFixed(1)}cm
${dam}Dam        ${mm.toFixed(1)}mm`)
