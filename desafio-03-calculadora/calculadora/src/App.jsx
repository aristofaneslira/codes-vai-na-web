
import React, { useState } from "react";
import Button from "./components/Button";
import { GlobalStyles } from "./components/GlobalStyles";

import * as B from "./components/ButtonStyles";
import * as  T from "./components/TelaStyle";

export default function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operacao, setOperacao] = useState("");
  const [resultado, setResultado] = useState("");


  const handleNumberClick = (numero) => {

    if (!operacao) {
      setNum1(num1 + numero);
    }
    else {
      setNum2(num2 + numero);
    }
  };

  const handleClickOperador = (operador) => {
    if (num1 && num2) {
      calcularResultado();
    }
    if (num1) {
      setOperacao(operador);
    }
  };

  const calcularResultado = () => {
    const primeiro = Number(num1);
    const segundo = Number(num2);

    let resultadoCalculado;


    if (operacao === "+") {
      resultadoCalculado = primeiro + segundo;
    } else if (operacao === "-") {
      resultadoCalculado = primeiro - segundo;
    } else if (operacao === "*") {
      resultadoCalculado = primeiro * segundo;
    } else if (operacao === "/") {
      resultadoCalculado = primeiro / segundo;
    } else if (operacao === "%") {
      resultadoCalculado = (primeiro * segundo) / 100;
    }

    setResultado(resultadoCalculado);
    setNum1(resultadoCalculado.toString());
    setNum2("");
    setOperacao("");
  };


  const handleClickIgual = () => {
    if (num1 && num2) {
      calcularResultado();
    }
  };


  const handleClickLimparC = () => {
    setNum1("");
    setNum2("");
    setOperacao("");
    setResultado("");
  };

  const handleClickLimparCE = () => {
    if (num2 && operacao && num1) {
      return setNum2(num2.slice(0, -1));
    }

    if (operacao) {
      return setOperacao("");
    }

    if (num1) {
      return setNum1(num1.slice(0, -1));
    }

    if (num1 && !operacao && !num2) {
      return setNum1("");
    }
  };

  return (
    <main>
      <div>
        <GlobalStyles />

        <div>
          <T.Tela>
            <T.Operacao>
              <p>
                {num1 !== ""
                  ? `${num1} ${operacao} ${num2}`
                  : "0"}
              </p>
            </T.Operacao>

            <T.Igual>
              <span>
                =
              </span>
              <p>{resultado ? resultado : "0"}</p>
            </T.Igual>
          </T.Tela>

          <B.ButtonContainer>
            <Button
              event={handleClickLimparCE}
            >
              {"CE"}
            </Button>
            <Button event={handleClickLimparC}>
              {"C"}
            </Button>
            <Button event={() => handleClickOperador("%")}>{"%"}
            </Button>
            <Button event={() => handleClickOperador("/")}>
              {"/"}
            </Button>
          </B.ButtonContainer>

          <B.ButtonContainer>
            <Button event={() => handleNumberClick("7")}>
              {"7"}
            </Button>
            <Button event={() => handleNumberClick("8")}>
            {"8"}
            </Button>
            <Button event={() => handleNumberClick("9")}>
            {"9"}
            </Button>
            <Button event={() => handleClickOperador("*")}>
            {"*"}
            </Button>
          </B.ButtonContainer>

          <B.ButtonContainer>
            <Button event={() => handleNumberClick("4")}>
            {"4"}
            </Button>
            <Button event={() => handleNumberClick("5")}>
            {"5"}
            </Button>
            <Button event={() => handleNumberClick("6")}>
            {"6"}
            </Button>
            <Button event={() => handleClickOperador("-")}>
            {"-"}
            </Button>
          </B.ButtonContainer>

          <B.ButtonContainer>
            <Button event={() => handleNumberClick("1")}>
            {"1"}
            </Button>
            <Button event={() => handleNumberClick("2")}>
            {"2"}
            </Button>
            <Button event={() => handleNumberClick("3")}>
            {"3"}
            </Button>
            <Button event={() => handleClickOperador("+")}>
            {"+"}
            </Button>
          </B.ButtonContainer>

          <B.ButtonContainer>
            <Button
              event={() => handleNumberClick(".")}
            >
              {"."}
            </Button>
            <Button event={() => handleNumberClick("0")}>
            {"0"}
            </Button>
            <Button
              event={handleClickIgual}
            >
             {"="}
            </Button>
          </B.ButtonContainer>
        </div>
      </div>
    </main>
  );
}