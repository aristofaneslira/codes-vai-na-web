import React from "react";
import Card from "./Components/Card";

export default function App() {
  return(
    <>
      <h1>OIIII</h1>
      <Card 
      link="https://static.tvgazeta.com.br/uploads/2023/02/Risole-Pratico.jpg"
      prato="Risole"
      preco="R$: 4,00"
      />
      <Card 
      link="https://s2.glbimg.com/XsuCg04ufUmOws4sI21yhsh7tKg=/512x320/smart/e.glbimg.com/og/ed/f/original/2021/05/20/por-que-pizza-tao-boa-gostosa-ciencia-sabor.png"
      prato="Pizza"
      preco="R$: 34,00"
      />
    </>
  );
}