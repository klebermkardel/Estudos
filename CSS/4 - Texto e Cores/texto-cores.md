# Propriedades de Texto e Cores

Agora que a estrutura está clara, vamos ver as propriedades mais comuns que usamos para mudar textos:

* ```color```: Muda a cor do texxto.
* ```font-size```: Muda o tamanho da letra (ex: ```16px```, ```20px```).
* ```font-family```: Escolhe a fonte (ex: ```Arial```, ```Helvetiva```, ```sans-serif```).
* ```text-align```: Alinha o texto (```left``` para esquerda, ```center``` para o centro, ```right``` para a direita, ```justify``` para justificado).
* ```font-weight```: Controla a "grossura" da letra (```normal``` ou ```bold``` para negrito).

## Como o CSS entende cores?

No Desafio Introdutório usamos nomes em inglês (```gray```, ```green```). Isso funciona, mas ficamos limitados a poucas cores. No mundo real, usamos formatos que geram milhões de combinações:

* **Hexadecimal (Mais comym):** Usa um código de 6 letras/números começado por ```#```. (Ex: ```#000000``` é preto, ```#ffffff``` é branco,  ```#ff5733``` é um tom de laranja).

* **RGB / RGBA:** Baseado em Red, Green, Blue. O "A" opcional controla a transparência de 0 (invisível) a 1 (totalmente opaco). (Ex: ```rgb(255, 0, 0)``` é vermelho puro; ```rgba(0, 0, 0, 0.5)``` é um preto semi-transparente).