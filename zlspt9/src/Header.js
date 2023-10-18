import React from "react";
import carrinho from "../src/assets/carrinho.png"

export default function Header(){
  return(
    <header>
      <section>
        <h1>Outubro Rosa</h1>
        <nav>
          <ul>
            <li>ABOUT</li>
            <li>PRODUCTS</li>
            <li>STORES</li>
            <li>CONTACT</li>
            <img src={carrinho} alt="Carrinho"/>
          </ul>
        </nav>
      </section>
    </header>
  )
}
