import { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";

//Exercicio 1:
// Criar dois botoes e um paragrafo com texto preto
// Ao clicar no primeiro botao a cor do texto do paragrafo muda para vermelho
// Ao clicar no segundo botao a cor do texto do paragrafo muda para preto

export default function Exercicio1() {
  //logica

  const [corState, setCorState] = useState("black");

  function clickVermelho() {
    setCorState("red");
  }
  function clickPreto() {
    setCorState("black");
  }

  return (
    <div>
      <div>
        <p
          style={{
            color: corState,
          }}
        >
          INFORMAÇÕES
        </p>
      </div>

      <div>
        <button onClick={clickVermelho}>TextoVermelho</button>
        <button onClick={clickPreto}>TextoPreto</button>
      </div>
    </div>
  );
}
