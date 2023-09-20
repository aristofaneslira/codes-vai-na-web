import React, { useState } from "react";

function Teste() {
    const [comida, setComida] = useState("pizza");
    return(
        <section>
            <p>Eu amo {comida}</p>
            <button onClick={() => setComida("lasanha")}>click</button>
        </section>
    )
}

export default Teste;