import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
`;

export const ButtonsOP = styled.button`
  padding: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  height: 67px;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: #ffffff;
  background-color: #FF8C00;

  &:hover {
    filter: brightness(90%);
  }
`;

export const ButtonsNum = styled.button`
  padding: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  height: 67px;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: #5f5d5d;
  background-color: #e3ddd5;

  &:hover {
    filter: brightness(90%);
  }
`;

export const ButtonsIgual = styled.button`
  padding: 18px;
  display: flex;
  grid-column: 3/5;
  justify-content: center;
  align-items: center;
  height: 67px;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: #000000;
  background-color: #828283;

  &:hover {
    filter: brightness(90%);
  }
`;