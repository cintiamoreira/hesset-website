import { useState } from "react";

// Bonus:
// Refazer os 3 exercicios, com apenas um botao, ao inves de dois.
// O botao vai funcionar como um Toggle, onde cada clique vai alterar o visual de cada respectivo paragrafo.
// --exercicio 2--

export default function Exercicio4() {
  const [texto, setTexto] = useState(false);

  function clickBotao() {
    setTexto(!texto);
  }
  return (
    <div>
      {texto && <p>Informações Secretas</p>}

      <button onClick={clickBotao}>Mostrar/Esconder</button>
    </div>
  );
}
