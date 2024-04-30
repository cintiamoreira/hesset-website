import { useState } from "react";

// Exercicio 2:
// Criar dois botoes e um paragrafo
// Quando a pagina abrir o paragrafo deve estar escondido
// Ao clicar no primeiro botao o paragrafo aparece na tela
// Ao clicar no segundo botao o paragrafo some novamente

export default function Exercicio2() {
  const [textoTela, setTextoTela] = useState(false);

  function clickMostrar() {
    setTextoTela(true);
  }

  function clickEsconder() {
    setTextoTela(false);
  }

  return (
    <div>
      <div>{textoTela && <p>Texto Modificável</p>}</div>

      <button onClick={clickMostrar}>Mostrar Texto</button>
      <button onClick={clickEsconder}>Esconder Texto</button>
    </div>
  );
}
