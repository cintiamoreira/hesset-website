// 2:
// Este exercicio não precisa do botão.
// Crie um objeto com as seguintes informações e as mostre na tela. Realize o agrupamento de informações semelhantes em objetos internos.
// - Email
// - Nome
// - Sobrenome
// - Data de Nascimento
// - Conta ativa?
// - Dinheiro
// - Telefone Celular
// - Telefone Fixo

import { useState } from "react";
export default function Exercicioobjeto2() {
  const usuario = {
    email: "fulano@gmail.com",
    nome: "fulano",
    sobrenome: "silva",
    nascimento: "15/04/2000",
    contaativa: false,
    dinheiro: 1000000000,
    contato: {
      celular: 85997854778,
      telefone: 8532478415,
    },
  };
  return (
    <div>
      <p>{usuario.email}</p>
      <p>{usuario.nome}</p>
      <p>{usuario.sobrenome}</p>
      <p>{usuario.nascimento}</p>

      <p>{usuario.contaativa ? <p>ATIVA</p> : <p>DESATIVADA</p>}</p>

      <p>{usuario.dinheiro}</p>
      <p>{usuario.contato.celular}</p>
      <p>{usuario.contato.telefone}</p>
    </div>
  );
}
