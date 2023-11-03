import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export default function App() {
  const [dados, setDados] = useState([]);
  const getDados = async () => {
    const Dados = await axios.get("https://rickandmortyapi.com/api/character");
    setDados(Dados.data.results);
  };

  useEffect(() => {
    getDados()
  }, []);

  return (
    <>
      <h1>API Rick e Morty</h1>
      {dados.map((item) => (
        <figure>
          <img src={item.image} alt="" />
          <figcaption>{item.name}</figcaption>
        </figure>

      ))}
    </>
  )
}