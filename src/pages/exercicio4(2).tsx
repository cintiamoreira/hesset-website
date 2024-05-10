import { useState } from "react";

// Bonus:
// Refazer os 3 exercicios, com apenas um botao, ao inves de dois.
// O botao vai funcionar como um Toggle, onde cada clique vai alterar o visual de cada respectivo paragrafo.
// --exercicio 2--

export default function Exercicio4() {
  const [mostrarTexto, setMostrarTexto] = useState(false);

  function clickBotao() {
    setMostrarTexto(!mostrarTexto);
  }
  return (
    <div>
      {mostrarTexto == false ? (
        <div>
          <p>Informações Secretas</p>
          <p>cintia</p>
        </div>
      ) : (
        <p>Informações Públicas</p>
      )}

      {mostrarTexto && <p>Aparecer Exemplo</p>}

      <button onClick={clickBotao}>Mostrar/Esconder</button>
    </div>
  );
}
