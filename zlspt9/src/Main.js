import React from "react";
import mulher from "./assets/mulher.png";

export default function Main() {
  return (
    <main>
      <h1>Conscientização e Esperança</h1>
      <p>
        O Outubro Rosa é um movimento global que acontece em outubro para
        aumentar a conscientização sobre o câncer de mama. A cor rosa é o
        símbolo dessa causa, representando esperança. Durante este mês,
        lembramos a importância da detecção precoce, apoio às pessoas afetadas e
        doações para a pesquisa. Vamos juntos lutar contra o câncer de mama.
      </p>
      <button>Saiba mais</button>
      <img src={mulher} alt="mulher" />
    </main>
  );
}
