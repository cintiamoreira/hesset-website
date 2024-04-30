import { Black_And_White_Picture } from "next/font/google";
import { useState } from "react";

// Bonus:
// Refazer os 3 exercicios, com apenas um botao, ao inves de dois.
// O botao vai funcionar como um Toggle, onde cada clique vai alterar o visual de cada respectivo paragrafo.
// --exercicio 3--

export default function Exercicio6() {
  const [corState, setCorState] = useState("transparent");

  function clickBorda() {
    if (corState == "transparent") {
      setCorState("black");
    } else {
      setCorState("transparent");
    }
  }

  return (
    <div>
      <p
        style={{
          borderColor: corState,
          borderStyle: "solid",
          borderWidth: "1px",
        }}
      >
        ---------
      </p>

      <button onClick={clickBorda}> Borda</button>
    </div>
  );
}
