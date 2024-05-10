export default function Estudosobjetos() {
  const nomemae = "Socorro";

  const bola = 23;

  const dedo = true;

  // objeto:
  const carteira = {
    // chave : valor,
    dinheiro: 50,
    nome: "cíntia",
    dono: true,
    contato: {
      contato1: 8534343434,
      contato2: 8599567564,
      email: "cintia.moreira@gmail.com",
    },
  };
  //controle no inspecionar
  console.log(carteira.dinheiro);
  console.log(carteira.nome);
  console.log(carteira.contato.email);

  return (
    <div>
      <p>lalala</p>
      <p>{nomemae}</p>
      <p>{carteira.contato.contato2}</p>
    </div>
  );
}
