# Estrutura de Repetição ```while``` (Enquanto...)

O ```while``` é o loop mais puro e intuitivo. Ele funciona exatamente como o pensamento: "*Enquanto essa condição for verdadeira, continue rodando*".

Ele é perfeito para quando você **não sabe** exatamente quantas vezes a repetição vai acontecer.

**Exemplo na vida real**: Fique assistindo às aulas no computador **while (enquanto)** você tiver energia. Você pode cansar na 2ª aula ou na 5ª, você não sabe o número exato de antemão.

## O ```while``` na Prática (Contando Arremessos)

Vamos construir um script simular a um treino de basquete onde você precisa fazer **3 lances livres**.

Para o loop funcionar sem travar seu computador (evitando o loop infinito), precisamos de 3 passos:

1. Criar uma variável de controle fora do loop (o nosso contador).

2. Definir a condição de para dentro dos parênteses do ```while```.

3. Mudar o valor da variável dentro do loop (pro contador subir e o loop ter um fim).

Olha o código completo:

```js
// 1. O contador 
let acertos = 0

// 2. Enquanto os acertos forem menor que 3, o loop continua rodando
while(aceros < 3) {
acertos++ // 3. Soma +1 toda vez que o bloco roda (o mesmo que acertos = acertos + 1)
    console.log("Você acertou o " + acertos + "º arremesso!)
}

console.log("Treino finalizado! Hora de descansar.")
```

O que aconteceu no terminal ao rodar esse código?

```plaintext
Você acertou o 1º arremesso!
Você acertou o 2º arremesso!
Você acertou o 3º arremesso!
Treino finalizado! Hora de descansar.
```

### O teste do "E se...?" (Entendo o fluxo)

Repare na linha ```acertos++```. Se você esquecer de colocar essa linha, a variável ```acertos``` vai continuar valendo ```0``` para sempre.

O JavaScript vai olhar e pensar: "0 é menor que 3? Sim. Mostra a mensagem. " Na primeira volta: "0 é menor que 3? Sim. Mostra a mensagem..." e ele nunca mais vai parar. Por isso o incremento é a engrenagem que faz o loop andar para a frente.