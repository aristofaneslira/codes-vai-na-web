import React from "react";
import Menta from "../assets/pizza1.png";

function Card() {
    return (
        <section>
            <div>
                <img src={Menta} alt="" />
                <h4>La Menta</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <h2>R$ 23</h2>
                <button>comprar agora</button>
            </div>

        </section>
    )
}

export default Card;