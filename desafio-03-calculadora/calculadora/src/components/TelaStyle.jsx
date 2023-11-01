import styled from "styled-components";

export const Tela = styled.div`
  margin-bottom: 20px;
  padding: 0 25px;
`;

export const Operacao = styled.p`
  color: #5f5d5d;
  text-align: right;
  font-size: 20px;
  letter-spacing: -0.4px;
  margin-bottom: 8px;

  p {
    width: 258px;
    text-align: end;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const Igual = styled.div`
  display: flex;
  justify-content: space-between;
  color: #ffffff;
  font-size: 40px;
  line-height: 140%;
  letter-spacing: -0.70px;

  p {
    width: 200px;
    text-align: end;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;