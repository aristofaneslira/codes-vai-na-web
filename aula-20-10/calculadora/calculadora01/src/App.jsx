
import React, {useState} from "react";

export default function App() {
  const[num1, setNum1] = useState();
  const[num2, setNum2] = useState();
  const[resultado, setResultado] = useState();

  const capturandoNum1 = (e) => {
    setNum1(Number(e.target.value));
  };
  const capturandoNum2 = (e) => {
    setNum2(Number(e.target.value));
  };

  const soma = () => {
      setResultado(num1 + num2);
  };

  return (
    <main>
        <h1>Calculadora</h1>
        <input onChange={capturandoNum1} />
        <input onChange={capturandoNum2} />
        <button onClick={soma}>Soma</button>
        <h2>Resultado: {resultado}</h2>
    </main>
  );
}