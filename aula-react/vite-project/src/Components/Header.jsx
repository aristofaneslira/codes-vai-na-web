import React from "react";
import "./HeaderStyle.css"

const Header = () => {
    return (
        <>
            <header>
                <nav>
                    <ul className="lista">
                        <li>Sobre</li>
                        <li>contato</li>
                        <li>Endereço</li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header;