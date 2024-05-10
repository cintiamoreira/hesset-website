import { useState } from "react";

// Ultimo Exercicio, Refazer o exercicio 3 da seguinte maneira.
// - Quando clicar no botao, o estilo do paragrafo deve alternar entre os seguintes:

// Estilo 1:
// - Cor do texto: black
// - Tamanho do texto: 20px
// - Borda: 4px, black, solid
// - Background do texto: Azure
// Estilo 2:
// - Cor do texto: BlanchedAlmond
// - Tamanho do texto: 30px
// - Borda: 2px, red, dashed
// - Background do texto: Brown

// DICA: Será necessário usar uma variavel de state do tipo boolean (true e false) para detectar SE o botao estará usando o Estilo 1 ou o Estilo 2

export default function Ultimoexercicio() {
  const [corState, setCorState] = useState("black");
  const [fonteState, setFonteState] = useState(20);
  const [bordaState, setBordaState] = useState("4px solid black");
  const [backgroundState, setBackgroundState] = useState("Azure");

  //resolução com boolen
  const [isEstilo1, setIsEstilo1] = useState(true);

  function clickEstilo() {
    if (isEstilo1 == true) {
      setCorState("BlanchedAlmond");
      setFonteState(70);
      setBordaState("2px rashed red");
      setBackgroundState("black");
      setIsEstilo1(false);
    } else {
      setCorState("black");
      setFonteState(20);
      setBordaState("4px solid black");
      setBackgroundState("Azure");
      setIsEstilo1(true);
    }
  }

  const estilo = {
    color: corState,
    fontSize: fonteState,
    border: bordaState,
    background: backgroundState,
  };

  return (
    <div>
      <p style={estilo}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus
        tincidunt lobortis.
      </p>

      <button onClick={clickEstilo}>ESTILOS</button>
    </div>
  );
}
