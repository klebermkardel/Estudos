import { useState } from "react";

import MeuContador from "./MeuContador"

export default function App() {

  const [contador, setContador] = useState(0)

  function aumentar() {
    setContador(contador + 1)
  }

  return (
    <div>
      <MeuContador />
      <h3>{contador}</h3>
      <button onClick={aumentar}>Aumentar</button>
    </div>
  )
}