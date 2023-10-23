import React from "react";
import styled from "styled-components";

const CaixaLanche = styled.section`
    background-color: #a2d4f5;
    width: 40vw;
    text-align: center;
`;

const Imagem = styled.img`
    width: 40vw;
`;

const Btn = styled.button`
    border: none;
    border-radius:20px;
    padding: 10px;
    cursor: pointer;
    margin-bottom: 10px;

    &:hover{
        background-color: #808080;
        color: #FF0000;
    }
`;

export default function Card({link, prato, preco}) {
    return (
        <CaixaLanche>
            <Imagem src={link} alt="" />
            <h3>{prato}</h3>
            <h4>{preco}</h4>
            <Btn>Comprar</Btn>
        </CaixaLanche>
    );
}