# Background Color

- Quase todo elemento tem um background, e podemos mudar a cor dele;
- Todas as regras que vimos sobre cores podem ser aplicadas no background color;
- A regra é: background-color: "cor";
- As regras de cor de fundo e cor de fonte podem ser utilizadas juntas;

## Background Opacity

- Podemos alterar a opacidade de uma cor de fundo com CSS;
- A regra é a opacity;
- Os valores vão de 0 a 1;
- Sendo 1 totalmente visível e 0 remove a cor;
- Com esta regra mudamos também a opacidade dos elementos dentro do elemento que alteramos a opacidade; veremos uma solução depois;

## Resolvendo o problema da opacidade

- Se você não quer aplicar a opacidade para os elementos filhos, precisa utilizar o RGBA ao invés de opacity;
- Alterando o valor de alpha temos a opacidade colocada apenas na cor de fundo;
- Então preservamos o conteúdo e alteramos o background;
