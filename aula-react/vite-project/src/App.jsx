import React, { useState } from "react"
import Header from "./Components/Header"
import Teste from "./Components/Teste"

function App() {
  const[count, setCount] = useState(0);
  const[pedido, setPedido] = useState("");
  const EscolheuRisole = () => setPedido("Risole");

  return (
    <>
      <Header/>
      <p>Você clicou {count}</p>
      <button onClick={() => setCount(count+1)}>click</button>
      <h1>Hello World!!</h1>
      <Teste/>
      <h1>Bom dia</h1>
      <h2>Confeitaria</h2>
      <h2>Escolha seu pedido</h2>
      <button onClick={() => setPedido("Pizza")}>Pizza</button>
      <button onClick={() => setPedido("Lasanha")}>Lasanha</button>
      <button onClick={() => setPedido("Coxinha")}>Coxinha</button>
      <button onClick={EscolheuRisole}>Risole</button>
      <h3>Voce escolheu {pedido}</h3>
    </>
  )
}

export default App
