import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Animacao() {
  const [dados, setDados] = useState([]);

  const getDados = async () => {
    const Dados = await axios.get("https://rickandmortyapi.com/api/character");
    setDados(Dados.data.results);
    console.log(Dados);
  };

  useEffect(() => {
    getDados();
  }, []);

  return (
    <>
      <h1> A Api Rick Morty </h1>
      {dados.map((item) => (
        <figure>
          <img src={item.image} alt="" />
          <figcaption>{item.name}</figcaption>
        </figure>
      ))}
    </>
  );
}
