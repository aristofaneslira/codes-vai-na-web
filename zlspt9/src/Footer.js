import React from "react";
import whatss from "./assets/whatss.png";
import instagram from "./assets/instagram.png";
import facebook from "./assets/facebook.png";

export default function Footer() {
  return (
    <footer>
      <nav>
        <ul>
          <li>
            <img src={whatss} alt="whatsapp" />
          </li>
          <li>
            <img src={instagram} alt="instagram" />
          </li>
          <li>
            <img src={facebook} alt="facebook" />
          </li>
        </ul>
      </nav>
    </footer>
  );
}
