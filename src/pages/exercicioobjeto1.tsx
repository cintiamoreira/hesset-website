//Exercicios sobre objetos:

// Todos seguem o mesmo padrão no HTML.
// 1 botao, 1 paragrafo ou div
// 1:
// Ao clicar no botao troque entre dois tipos de estilo para o paragrafo. Voce deve utilizar objetos
// Estilo 1:
// - Height: 100
// - Width: 100
// - Border Radius: 12
// - Border Width: 1
// - Border Color: salmon
// - Background Color: cyan
// - Color: Brown

// Estilo 2:
// - Height: 100
// - Width: 100
// - Border Radius: 12
// - Border Width: 1
// - Border Color: cyan
// - Background Color: salmon
// - Color: Brown

// Dica:
// - Os objetos não precisam ser variaveis de state.
// - Apenas a troca entre um estilo e o outro vai necessitar de alguma variavel de state
import { useState } from "react";

export default function Exercicioobjeto1() {
  const estilo1 = {
    height: 100,
    width: 100,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "salmon",
    backgroundColor: "cyan",
    color: "brown",
  };

  const estilo2 = {
    height: 100,
    width: 100,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "cyan",
    backgroundColor: "salmon",
    color: "brown",
  };

  const [estiloState, setEstiloState] = useState(true);

  function clickEstilo() {
    if (estiloState) {
      setEstiloState(false);
    } else {
      setEstiloState(true);
    }
  }

  return (
    <div>
      {/* if dentro do HTML (TERNARY)*/}
      <p style={estiloState ? estilo2 : estilo1}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <button onClick={clickEstilo}>Estilo</button>
    </div>
  );
}
