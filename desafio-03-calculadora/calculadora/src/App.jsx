
import React, { useState } from "react";
import styled from "styled-components";

export default function App() {
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [resultado, setResultado] = useState();
  const [operacao, setOperacao] = useState();

  const capturandoNum1 = (e) => {
    setNum1(Number(e.target.value));
  };
  const capturandoNum2 = (e) => {
    setNum2(Number(e.target.value));
  };

  const soma = () => {
    setResultado(num1 + num2);
    setOperacao("+");
  };
  const sub = () => {
    setResultado(num1 - num2);
    setOperacao("-");
  };
  const div = () => {
    setResultado(num1 / num2);
    setOperacao("/");
  };
  const mult = () => {
    setResultado(num1 * num2);
    setOperacao("*");
  };
  const reset = () => {
    setResultado(0);
    setOperacao("");
  };
  // const igual = () => {
  //   return resultado;
  // };

  //   const um = () => {
  //     capturandoNum1 = 1;
  // }; 

  const Btn = styled.button`
    border: none;
    border-radius:20px;
    padding: 10px;
    cursor: pointer;
    margin-bottom: 10px;
    background-color: #C0C0C0;
    color: #FFFFFF;
    font-size: 45px;

    &:hover{
      background-color: #A9A9A9;
        color: #FFFFFF;
    }
`;

const Btn_op = styled.button`
    border: none;
    border-radius:20px;
    padding: 10px;
    cursor: pointer;
    margin-bottom: 10px;
    background-color: #DAA520;
    color: #FFFFFF;
    font-size: 45px;

    &:hover{
      background-color: #B8860B;
        color: #FFFFFF;
    }
`;

const Btn_igual = styled.button`
    border: none;
    border-radius:20px;
    padding: 10px;
    cursor: pointer;
    margin-bottom: 10px;
    background-color: #808080;
    color: #FFFFFF;
    font-size: 45px;

    &:hover{
      background-color: #696969;
        color: #FFFFFF;
    }
`;

  return (
    <main>
      <h1>Calculadora</h1>
      <input onChange={capturandoNum1} />
      <h2>{operacao}</h2>
      <input onChange={capturandoNum2} />
      <h2>= {resultado}</h2>
      <div className="linha">
        <Btn>7</Btn>
        <Btn>8</Btn>
        <Btn>9</Btn>
        <Btn_op onClick={mult}>*</Btn_op>
      </div>

      <div className="linha">
        <Btn>4</Btn>
        <Btn>5</Btn>
        <Btn>6</Btn>
        <Btn_op onClick={sub}>-</Btn_op>
      </div>

      <div className="linha">
        <Btn>1</Btn>
        <Btn>2</Btn>
        <Btn>3</Btn>
        <Btn_op onClick={soma}>+</Btn_op>
      </div>

      <div className="linha">
        <Btn_op onClick={div}>/</Btn_op>
        <Btn>0</Btn>
        <Btn_op onClick={reset}>C</Btn_op>
        <Btn_igual /*onClick={igual}*/>=</Btn_igual>
      </div>

    </main>
  );
}