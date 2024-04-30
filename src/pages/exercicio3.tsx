import { useState } from "react";

// Criar dois botoes e um paragrafo
// Ao clicar no primeiro botao, aparece uma borda de 1px, solida, preta em volta do paragrafo
// Ao clicar no segundo botao, a borda desaparece

export default function Exercicio3() {
  const [corState, setCorState] = useState("transparent");

  function clickBorda() {
    setCorState("black");
  }

  function clickSemBorda() {
    setCorState("transparent");
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
        Decore
      </p>

      <button onClick={clickBorda}>Com Borda</button>
      <button onClick={clickSemBorda}>Sem Borda</button>
    </div>
  );
}
