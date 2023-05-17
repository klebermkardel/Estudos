# Lâmpada

Este é um pequeno projeto que simula o funcionamento de uma lâmpada utilizando HTML, CSS e JavaScript.

## Pré-requisitos

Antes de executar o código, certifique-se de ter os seguintes arquivos no mesmo diretório:

- `index.html`: o arquivo HTML principal.
- `style.css`: o arquivo CSS responsável pela estilização.
- `lampada.js`: o arquivo JavaScript que contém a lógica do funcionamento da lâmpada.
- `img/`: um diretório contendo as imagens da lâmpada nos diferentes estados.

## Instruções

1. Faça o download ou clone este repositório.
2. Abra o arquivo `index.html` em seu navegador.

## Estrutura do Projeto

O projeto é composto pelos seguintes arquivos:

```
- index.html
- style.css
- lampada.js
- img/
    - desligada.jpg
    - ligada.jpg
    - quebrada.jpg
```

## Detalhes de Implementação

### HTML

O arquivo HTML (`index.html`) contém a estrutura básica da página, incluindo o cabeçalho, o corpo e os botões de ligar e desligar a lâmpada.

### CSS

O arquivo CSS (`style.css`) define a estilização da página, aplicando o layout de coluna para o cabeçalho e o conteúdo principal, e configurando o tamanho dos botões.

### JavaScript

O arquivo JavaScript (`lampada.js`) contém as funções responsáveis pelo funcionamento da lâmpada. As principais funções são:

- `isLampBroken()`: verifica se a lâmpada está quebrada.
- `lampOn()`: acende a lâmpada, alterando a imagem exibida.
- `lampOff()`: apaga a lâmpada, alterando a imagem exibida.
- `lampBroken()`: simula a quebra da lâmpada, alterando a imagem exibida.

Além disso, há os eventos associados aos botões e à lâmpada, que disparam as ações correspondentes.

