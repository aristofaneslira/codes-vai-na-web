import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [contador, setContador] = useState(0);

  const add = () => setContador(contador + 1);
  const sub = () => setContador(contador - 1);
  const reset = () => setContador(0);

  if (contador < 0) {
    setContador(0);
    alert("O número minino é 0!!");
  }

  if (contador > 10) {
    setContador(10);
    alert("O número máximo é 10!!");
  }

  return (
    <>
      <section>
        <p>{contador}</p>
        <div>
          <button onClick={add}>+</button>
          <button onClick={reset}>ZERAR</button>
          <button onClick={sub}>-</button>
        </div>
      </section>
    </>
  );
}
