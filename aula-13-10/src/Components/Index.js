import React, { useState } from "react";
import Bruxa from "../assets/bruxa.png";
import Fada from "../assets/fada.png";
import Fantasma from "../assets/fantasma.png";
import Pirata from "../assets/pirata.png";
import Vampiro from "../assets/vampiro.png";
import Zumbi from "../assets/zumbi.png";
import * as S from "./IndexStyle";

export default function Index() {
  const [monstro, setMonstro] = useState([
    {
      imagem: Bruxa,
      nome: "Bruxa"
    },
    {
      imagem: Fada,
      nome: "Fada"
    },
    {
      imagem: Fantasma,
      nome: "Fantasma"
    },
    {
      imagem: Pirata,
      nome: "Pirata"
    },
    {
      imagem: Vampiro,
      nome: "Vampiro"
    },
    {
      imagem: Zumbi,
      nome: "Zumbi"
    }
  ]);
  return (
    <main>
      <S.GlobalStyled />
      <S.H1>Halloween</S.H1>
      <S.Sessao>
        {monstro.map((item) => (
          <S.Figura>
            <img src={item.imagem} alt={item.nome} />
            <S.Legend>{item.nome}</S.Legend>
          </S.Figura>
        ))}
      </S.Sessao>
    </main>
  );
}
