import React, { useState } from "react";

export default function App() {
  const [infoFiltrada, setInfoFiltrada] = useState([]);
  const info = [
    {
      produto: "cuscuz",
      preco: 2
    },
    {
      produto: "detergente",
      preco: 1
    },
    {
      produto: "leite",
      preco: 4
    },
    {
      produto: "Nescau",
      preco: 8
    },
    {
      produto: "café",
      preco: 3
    }
  ];

  const precoPromocional = () => {
    setInfoFiltrada(
      info.filter((elemento) => {
        return elemento.preco < 4;
      })
    );
  };
  return (
    <main>
      <h1>Mercado</h1>
      <button
        onClick={() => {
          precoPromocional();
        }}
      >
        Promoções
      </button>
      {infoFiltrada.map((item) => (
        <ul>
          <li>{item.preco}</li>
          <li>{item.produto}</li>
        </ul>
      ))}
    </main>
  );
}
