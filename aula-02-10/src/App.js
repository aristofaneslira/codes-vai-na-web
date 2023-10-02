import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [num, setNum] = useState(0);
  const [intervalID, setIntervalID] = useState();
  const cont = () => {
    const comecando = setInterval(() => {
      setNum((num) => num + 1);
    }, 1000);
    setIntervalID(comecando);
  };

  const parando = () => {
    clearInterval(intervalID);
  };

  return (
    <main>
      <h1>Cronômetro</h1>
      <h2>{num}</h2>
      <button onClick={cont}>Iniciar</button>
      <button onClick={parando}>Parar</button>
    </main>
  );
}
