import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
*{
  margin:0;
  padding: 0;
}

body{
  background-color:#800080;
}
`;

export const H1 = styled.h1`
  font-size: 80px;
  color: #ffffff;
`;

export const Sessao = styled.section`
  display: flex;
`;

export const Figura = styled.figure`
  background: #efb41c;
  margin: 30px;
  border-radius: 20px;
`;

export const Legend = styled.figcaption`
  color: #ed2e2e;
  font-size: 30px;
  display: flex;
  justify-content: center;
  font-weight: 800;
`;
