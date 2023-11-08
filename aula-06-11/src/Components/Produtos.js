import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Produtos() {
  const [produtos, setProdutos] = useState([]);

  const getProdutos = async () => {
    const dados = await axios.get("https://fakestoreapi.com/products");
    setProdutos(dados.data);
  };

  useEffect(() => {
    getProdutos();
  }, []);

  return (
    <>
      <h1> Loja de Produtos </h1>
      {produtos.map((item) => (
        <figure>
          <img src={item.image} alt="" />
          <figcaption>{item.title}</figcaption>
        </figure>
      ))}
    </>
  );
}
