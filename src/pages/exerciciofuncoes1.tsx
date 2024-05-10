// Exercicios funções:
// Lembretes:
// - Funções puras são funções que apenas usam os parametros
// - Funções inputas usam tanto seus parametros (se houverem) como variaveis externas
// - Quando for usar uma função QUE TEM PARAMETROS no clique de um botao, você deve fazer o ENVELOPMANTO (Wrapping) da sua função

// Exercicio 1:
// - Crie uma função que recebe dois numeros, os soma e mostra na tela via um alert

export default function Exerciciofuncoes1() {
  function numeros(numero1: number, numero2: number) {
    alert(numero1 + numero2);
  }

  numeros(2, 4);

  return (
    <div>
      <p>Teste</p>
    </div>
  );
}
