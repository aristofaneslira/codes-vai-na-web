import React, { useState, useEffect } from "react";

export default function App() {

  // useEffect(()=>{
  //   alert("oi eu sou o efeito colateral")
  // }, );

  // useEffect(()=>{
  //   alert("oi eu sou o efeito colateral")
  // }, []);

  useEffect(()=>{
    alert("oi eu sou o efeito colateral")
  }, []);

  const[animal, setAnimal] = useState("Galo");
  const alteraAnimal = () => {
    setAnimal(animal === "Galo" ? "Cão" : "Galo");
  };
  const[nome, setNome] = useState("Ari");
  const alteraNome = () => {
    if(nome === "Ari"){
      setNome("Carol");
    }else {
      setNome("Ari");
    }
  };
  return(
    <>
    <h1>{nome}</h1>
    <button onClick={alteraNome}>Trocar nome</button>
    <h2>{animal}</h2>
    <button onClick={alteraAnimal}>Trocar animal</button>
    </>
  );
}