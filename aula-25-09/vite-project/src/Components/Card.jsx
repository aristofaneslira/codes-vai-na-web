import React, { useState } from "react";
import Menta from "../assets/pizza1.png";
import Cuma from "../assets/pizza2.png";
import Bana from "../assets/pizza3.png";
import Toca from "../assets/pizza4.png";

function Card() {
    const[pizza, setPizza] = useState("");
    const[imagem, setImagem] = useState();
    const[msg, setMsg] = useState("");

    const laMenta = () => {
        setPizza("La Menta");
        setImagem(Menta);
        setMsg("Seu pedido é:");
    }

    const laCuma = () => {
        setPizza("La Cuma");
        setImagem(Cuma);
        setMsg("Seu pedido é:");
    }

    const laBana = () => {
        setPizza("La Bana");
        setImagem(Bana);
        setMsg("Seu pedido é:");
    }

    const laToca = () => {
        setPizza("La Toca");
        setImagem(Toca);
        setMsg("Seu pedido é:");
    }

    return (
        <main>
            <h2>{msg}</h2>
            <h2>{pizza}</h2>
            <img src={imagem} alt="" />
        <section>
            <div>
                <img src={Menta} alt="" />
                <h4>La Menta</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <h2>R$ 23</h2>
                <button onClick={laMenta}>Comprar agora</button>
            </div>

            <div>
                <img src={Cuma} alt="" />
                <h4>La Cuma</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <h2>R$ 23</h2>
                <button onClick={laCuma}>Comprar agora</button>
            </div>

            <div>
                <img src={Bana} alt="" />
                <h4>La Bana</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <h2>R$ 23</h2>
                <button onClick={laBana}>Comprar agora</button>
            </div>

            <div>
                <img src={Toca} alt="" />
                <h4>La Toca</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <h2>R$ 23</h2>
                <button onClick={laToca}>Comprar agora</button>
            </div>

        </section>
        </main>
    )
}

export default Card;