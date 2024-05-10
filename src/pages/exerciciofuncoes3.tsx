// Exercicios funções:
// Lembretes:
// - Funções puras são funções que apenas usam os parametros
// - Funções inputas usam tanto seus parametros (se houverem) como variaveis externas
// - Quando for usar uma função QUE TEM PARAMETROS no clique de um botao, você deve fazer o ENVELOPMANTO (Wrapping) da sua função

// Exercicio 3:
// - Crie um botao no HTML
// - Faça com que o botao realize uma função de Toggle em uma variavel de state do tipo boolean
// - O texto do botao deve mudar entre Habilitar e Desabilitar baseado na variavel de state
// - Crie outro botao no HTML com texto "Mostrar nome ativo"
// - Crie uma função que recebe duas strings, nome1 e nome2
// - Quando clicar no segundo botao, caso a variavel de state esteja true, mostre o nome1 na tela. Se estiver false, mostre o nome2
import { useState } from "react";
export default function Exerciciofuncoes3() {
  const [mostrarHabilitar, setmostrarHabilitar] = useState(true);

  function clickMostrarHabilitar() {
    if (mostrarHabilitar == true) {
      setmostrarHabilitar(false);
    } else {
      setmostrarHabilitar(true);
    }
  }

  function nomes(nome1: string, nome2: string) {
    if (mostrarHabilitar == true) {
      alert(nome1);
    } else {
      alert(nome2);
    }
  }
  function clickMostrarNome() {
    nomes("cintia", "christian");
  }

  return (
    <div>
      <button onClick={clickMostrarHabilitar}>
        {mostrarHabilitar ? "Desabilitar" : "Habilitar"}
      </button>

      <p></p>

      <button onClick={clickMostrarNome}>Mostrar nome ativo</button>
    </div>
  );
}
