import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";

const Modal = styled.section`
  background-color: blue;
  border-radius: 20px;
  color: red;
  border: 4px solid chocolate;
`;

const Btn = styled.button`
  background-color: blue;
  padding: 10px;
  color: white;
  border-radius: 30px;
`;

export default function App() {

  const [showModal, setShowModal] = useState(false);

  useEffect(() => { setTimeout(()=>{setShowModal(true)}, 5000)},[]);

  const fecharModal = () => {
    setShowModal(false);
  };

  return (
    <main>
      { showModal && (
        <Modal>
          <Btn onClick={fecharModal}>x</Btn>
          <h2>Atenção!!!!!!!</h2>
          <h3>Se inscreva no nosso canal!!!</h3>
          <h3>Deixe seu like!!!</h3>
          <Btn>Click aqui e seja um youtuber!!</Btn>
        </Modal>
      )}
      <h1>YouTube</h1>
      <section>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/0Z1TdVO9vXI?si=9nrfcmtZ4f-iMA_b" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/h0GX3hHSoqk?si=i9eEtp8Mea1M81CP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </section>
    </main>
  )
}