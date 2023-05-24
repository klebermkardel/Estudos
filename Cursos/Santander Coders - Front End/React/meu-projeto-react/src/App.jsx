import MeuComponente from "./components/MeuComponente"

function App() {
  return (
    <div>
      <h1>Olá Mundo, React!</h1>
      <MeuComponente />
      <MeuComponente />
      <MeuBotao conteudo='me clique' />

      <MeuBotao conteudo='depois aqui' />
      <MeuBotao conteudo='e por fim aqui' idade={2} />
    </div>
  )
}

function MeuBotao(props) {
  return (
    <button>{props.conteudo}</button>
  )
}

export default App