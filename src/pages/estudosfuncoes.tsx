{
  /* função --> salva um trecho de codigo para executar algo, varias vezes ou não. Pode ou não retornar um valor. */
}
export default function Estudosfuncoes() {
  // function Nome (){
  //   execução
  // }

  const numero = 20;

  function funcaoImpura() {
    alert(numero + 1);
  }

  //pura> nao faz uso de coisas fora dela
  //vai ter um parametro usado somente dentro da funcao (qualquer tipo de variavel)
  function funcaoPura(numeroParametro: number) {
    console.log(numeroParametro + 1);
  }

  funcaoPura(30);
  funcaoPura(68);
  funcaoPura(78);

  function funcaoImpuraComParametros(valor: number) {
    console.log(numero + valor);
  }
  funcaoImpuraComParametros(40);
  funcaoImpuraComParametros(50);

  function funcaoComMultiplosParametros(numero1: number, numero2: number) {
    console.log(numero1 + numero2);
  }

  funcaoComMultiplosParametros(15, 16);

  function funcaoComStringeNumber(palavra: string, idade: number) {
    console.log(palavra, idade);
  }
  funcaoComStringeNumber("oi", 25);

  return (
    <div>
      <p>aaidfjaifjaisd</p>

      <button onClick={funcaoImpura}>Função Impura</button>
      <button onClick={() => funcaoImpuraComParametros(20)}>
        Função Impura Com Parâmetros
      </button>
      <button onClick={() => funcaoComStringeNumber("christian", 25)}>
        Função com String e Number
      </button>
    </div>
  );
}
