# Onde o CSS pode ficar?

No dia a dia, existem 3 formas de colocar CSS em um projeto. É bom conhecê-las para não estranharmos quando virmos códigos de outras pessoas:

1. **CSS Inline (Direto na Tag):** Você escreve o estilo direto no elemento HTML usando o atributo ```style```.

* *Exemplo*: ```<p style="color: blue;">Texto</p>```

* *Uso*: Quase não usamos. Ele deixa o HTML bagunçado e quebra a regra da cascata (ele é forte demais e ignora os outros CSS).

2. **CSS Interno (Na mesma página):** Foi feito no Desafio Introdutório. Ele fica dentro da tag ```<style>``` no ```<head>```.

* *Uso*: Ótimo para testes rápidos ou páginas únicas pequenas.

3. **CSS Externo (Arquivo Separado):** Criamos um arquivo chamado, por eemplo, ```estilo.css``` e colocamos só o codigo CSS nele. Depois, linkamos ele no HTML com uma linha no ```<head>``` : ```<link rel="stylesheet" href="estilo.css">```;

* *Uso*: **É o padrão do mercado.** Permite que usemos o mesmo visual em 10, 50 ou 100 páginas HTML diferentes sem precisar copiar código. 