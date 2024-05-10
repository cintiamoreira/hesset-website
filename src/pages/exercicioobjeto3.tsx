// 3:
// Este exercicio junta os dois conhecimentos acima.
// Crie um objeto com as mesmas informações do exercicio 2:
// Realize o agrupamento de informações semelhantes em objetos internos.
// - Email
// - Nome
// - Sobrenome
// - Data de Nascimento
// - Conta ativa?
// - Dinheiro
// - Telefone Celular
// - Telefone Fixo

// O clique do botão vai realizar a renderização e desrenderização dos dados na tela.
// Clica uma vez: as informações desaparecem
// Clica novamente: as informações re-aparecem

// Dica:
// - Novamente, o objeto não precisa ser uma variavel de state
// - Apenas a logica para renderizar e des-renderizar as informações necessita de variavel de state

import { useState } from "react";

export default function ExercicioObjeto3() {
  const [mostrarUsuario, setMostrarUsuario] = useState(true);

  const usuario = {
    nome: "fulano",
    sobrenome: "costa",
    email: "fulano@gmail.com",
    nascimento: "21/08/2000",
    contaativa: false,
    dinheiro: 200000000,
    contato: {
      celular: 85998547854,
      telefone: 8534558745,
    },
  };

  function clickAparecer() {
    if (mostrarUsuario == true) {
      setMostrarUsuario(false);
    } else {
      setMostrarUsuario(true);
    }
  }

  return (
    <div>
      <button onClick={clickAparecer}>
        {mostrarUsuario ? "Esconder Informações" : "Mostrar Informações"}
      </button>

      {mostrarUsuario && (
        <div>
          <p>{usuario.nome}</p>
          <p>{usuario.sobrenome}</p>
          <p>{usuario.email}</p>
          <p>{usuario.nascimento}</p>
          <p>{usuario.contaativa ? "ATIVADA" : "DESATIVADA"}</p>
          <p>{usuario.dinheiro}</p>
          <p>{usuario.contato.celular}</p>
          <p>{usuario.contato.telefone}</p>
        </div>
      )}
    </div>
  );
}
