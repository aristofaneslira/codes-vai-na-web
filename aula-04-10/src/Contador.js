import React, { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: gold;
  border: none;
  padding: 20px;
  margin: 10px;
  border-radius: 30px;
  font-size: 20px;
`;

export default function Contador() {
  const [num, setNum] = useState(0);
  const add = () => {
    if (num < 10) {
      setNum(num + 1);
    }
  };
  const sub = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  };
  const reset = () => {
    setNum(0);
  };

  return (
    <main>
      <h2>{num}</h2>
      <Button onClick={add}>+</Button>
      <Button onClick={sub}>-</Button>
      <button onClick={reset}>RESET</button>
    </main>
  );
}
