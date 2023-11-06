import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Animacao from "./Components/Animacao";
import Home from "./Components/Home";
import Produtos from "./Components/Produtos";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/animacao">API Animação</Link>
            </li>
            <li>
              <Link to="/produtos">API Produtos</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/animacao" element={<Animacao />} />
          <Route path="/produtos" element={<Produtos />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
