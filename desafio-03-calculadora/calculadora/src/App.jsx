
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
  const sub = () => {
      setResultado(num1 - num2);
  };
  const div = () => {
      setResultado(num1 / num2);
  };
  const mult = () => {
      setResultado(num1 * num2);
  };
  const reset = () => {
      setResultado(0);
  };
  // const igual = () => {
  //   return resultado;
  // };

//   const um = () => {
//     capturandoNum1 = 1;
// }; 

  return (
    <main>
        <h1>Calculadora</h1>
        <input onChange={capturandoNum1} />
        <input onChange={capturandoNum2} />  
        <h2>= {resultado}</h2>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button onClick={mult}>*</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button onClick={sub}>-</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button onClick={soma}>+</button>
        <button onClick={div}>/</button>
        <button>0</button>
        <button onClick={reset}>C</button>
        <button /*onClick={igual}*/>=</button>
    </main>
  );
}