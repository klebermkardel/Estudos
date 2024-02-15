# As cores do CSS

- Em CSS as cores são divididas em grupos, temos:
- Nome da cor: como red ou blue, não são muito utilizados;
- RGB: configuramos as tonalidades de red, green e blue;
- Hexadecimal: uma união de letras e números, que podem criar uma cor, a maneira mais utilizada;
- HSL: hue, saturation, lightness, mudando estes valores, temos uma cor;

## Nomes da cores

- Nós utilizamos muito essa maneira até agora, mas em projetos reais não é tão empregada;
- Pois ela nos limita a apenas as cores com nomes existentes;
- No mundo real precisamos de mais possibilidades, para não limitar os designers;
- O nome da cor consiste na utilização do nome real da cor como valor da propriedade;

## Hexadecimal (HEX)

- Hex ou Hexadecimal é a abordagem mais utilizada;
- Basicamente temos que inserit 6 dígitos, precedidos de uma #;
- Os dois primeiros representam o tom de vermelho, depois o verde e por fim o azul;
- Os valores vão de 0 a 9 e A a F;
- 0 é o mais escuro e F o mais claro;
- O valor de #000 é a cor preta e #FFF a cor branca;
- Se um valor for repetido 6 vezes, podemos escrever a cor de forma mais simples;
- No caso de #FFFFFF podemos escrever #FFF
- A mesma coisa vale para #112233, essa cor pode ser escrita como #123
- Esta é uma técnica muito utilizada

## RGB

- RGB significa Red, Green e Blue;
- Nós precisamos inserir a intensidade de cada cor, com valores de 0 a 255;
- 0 é o mais escuro e 255 o mais claro;
- Aplicamos RGB com a seguinte sintaxe: rgb(0-255, 0-255, 0-255)
- O primeiro valor representa o vermelho, depois o verde e por fim o azul;
- Para criar a cor verde, por exemplo, inserimos: rgb(0, 255, 0)

## RGBA

- Podemos criar cores também com o RGBA, A vem de alpha;
- A alteração dele muda a opacidade da cor;
- Os valores possíveis são de 0 a 1;
- Sendo 0 transparente e 1 totalmente visível;
- A sintaxe é quase a mesma: rgba(0-255, 0-255, 0-255, 0-1)

## HSL

- HSL é um acrônimo para hue, saturation e lightness;
- Esta abordagem não é muito utilizada, o ranking de uso é: HEX > RGB > HSL > Nomes de cor;
- Podemos definir uma cor com : hsl(0-255, 0-100%, 0-100%)