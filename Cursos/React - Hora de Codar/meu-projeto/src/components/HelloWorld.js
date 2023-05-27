import Frase from './Frase'

function HelloWorld () {
    return (
        <div>
            <Frase frase="Este é um componente com uma frase" />
            <h1>Meu primeiro componente</h1>
            <Frase frase="Este é um componente com outra frase"/>
            <Frase frase="E este é um componente com mais uma frase"/>
        </div>
    )
}

export default HelloWorld