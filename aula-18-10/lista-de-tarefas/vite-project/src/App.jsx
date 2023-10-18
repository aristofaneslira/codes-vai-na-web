import React, { useState } from "react";

export default function App() {
  const [tarefaInput, setTarefaInput] = useState();
  const [tarefas, setTarefas] = useState([]);
  const capturandoTarefa = (evento) => {
    setTarefaInput(evento.target.value);
  };
  const tarefasGuardadas = () => {
    setTarefas(tarefas.concat(tarefaInput));
  };
  return (
    <main>
      <h1>Lista de tarefas</h1>
      <input type="text" onChange={capturandoTarefa} />
      <button onClick={tarefasGuardadas}>adicionar</button>
      {
        tarefas.map((item) => (
          <ul>
            <li>{item}</li>
          </ul>
        ))
      }
    </main>
  );
}