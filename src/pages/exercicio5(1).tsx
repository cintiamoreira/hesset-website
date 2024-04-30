import { useState } from "react";

// Bonus:
// Refazer os 3 exercicios, com apenas um botao, ao inves de dois.
// O botao vai funcionar como um Toggle, onde cada clique vai alterar o visual de cada respectivo paragrafo.
// --exercicio 1--

export default function Exercicio5() {
  const [cor, setCor] = useState("black");

  function mudarCor() {
    //se a cor for black entao vira red
    if (cor == "black") {
      setCor("red");
    }
    //pode se usar o else
    if (cor == "red") {
      setCor("black");
    }
  }

  return (
    <div>
      <p style={{ color: cor }}>Colorindo</p>

      <button onClick={mudarCor}>RED/BLACK</button>
    </div>
  );
}
