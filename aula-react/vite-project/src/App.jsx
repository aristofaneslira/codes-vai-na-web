import React, { useState } from "react"
import Header from "./Components/Header"
import Teste from "./Components/Teste"

function App() {
  const[count, setCount] = useState(0);

  return (
    <>
      <Header/>
      <p>Você clicou {count}</p>
      <button onClick={() => setCount(count+1)}>click</button>
      <h1>Hello World!!</h1>
      <Teste/>
    </>
  )
}

export default App
