// Exercicios funções:
// Lembretes:
// - Funções puras são funções que apenas usam os parametros
// - Funções inputas usam tanto seus parametros (se houverem) como variaveis externas
// - Quando for usar uma função QUE TEM PARAMETROS no clique de um botao, você deve fazer o ENVELOPMANTO (Wrapping) da sua função

// Exercicio 2:
// - Crie uma função que recebe duas strings, nome e sobrenome, e os mostra na tela

export default function Exerciciofuncoes2() {
  function nomeCompleto(nome: string, sobrenome: string) {
    console.log(nome, sobrenome);
  }

  nomeCompleto("fulano", "silva");

  return <p>teste</p>;
}
