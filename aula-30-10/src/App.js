import React from "react";
import Fantasias from "./Components/Fantasias";
import Filmes from "./Components/Filmes";
import Sobre from "./Components/Sobre";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <>
      <h1>Hallowen</h1>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Fantasias</Link>
            </li>
            <li>
              <Link to="/filmes">Filmes</Link>
            </li>
            <li>
              <Link to="/sobre">Sobre</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Fantasias />} />
          <Route path="/filmes" element={<Filmes />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
