import React from "react";
import Logo from "./assets/laco.png";
import styled from "styled-components";
import { GlobalStyle } from "./global";

const Header = styled.header`
  background-color: #ffa0d9;
  display: flex;
  align-items: center;
  color: #ffffff;
  font-size: 20px;
`;
const Lista = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-around;
  width: 80vw;
`;

const P = styled.p`
  background-color: #ffa0d9;
`;

export default function App() {
  const conteudo = [
    {
      posicao: 1,
      texto: "Nódulo palpável na mama."
    },
    {
      posicao: 2,
      texto: "Pele avermelhada ou retraída, sem resposta a tratamentos tópicos;"
    },
    {
      posicao: 3,
      texto:
        "Alterações no mamilo, incluindo a inversão do mamilo ou a saída anormal de secreção"
    },
    {
      posicao: 4,
      texto: "Dor ou inchaço em parte ou na totalidade das mamas"
    },
    {
      posicao: 5,
      texto: "Nódulos cervicais ou na axila"
    }
  ];
  return (
    <>
      <GlobalStyle />
      <Header>
        <img src={Logo} alt="laço outubro rosa" />
        <nav>
          <Lista>
            <li>CARTILHA</li>
            <li>FOLHETO COLO DO ÚTERO</li>
            <li>FOLHETO MAMA</li>
            <li>KIT MATERIAIS</li>
          </Lista>
        </nav>
      </Header>
      <main>
        <section>
          <h2>
            Os principais sinais de alerta ou sintomas do câncer de mama são:
          </h2>
          <>
            {conteudo.map((item) => (
              <P>
                {item.posicao} {item.texto}
              </P>
            ))}
          </>
        </section>
        <section></section>
      </main>
    </>
  );
}
