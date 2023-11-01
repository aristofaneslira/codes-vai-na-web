import React from "react";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";

export default function App(){
  return(
    <>
    <h1>ROTAS</h1>
    <BrowserRouter>
    <nav>
      <ul>
        <li> <Link to={""}>Home</Link> </li>
        <li> <Link to={"/about"}>About</Link> </li>
        <li> <Link to={"/contact"}>Contact</Link> </li>
      </ul>
    </nav>
    <Routes>
      <Route path="" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}