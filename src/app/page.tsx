//js
"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  //js
  //logica
  //na funcao usa =

  const [corState, setCorState] = useState("white");

  const [carregando, setCarregando] = useState(false);

  function clickVermelho() {
    setCorState("red");
  }

  function clickVerde() {
    setCorState("green");
  }

  function clickBlue() {
    setCorState("blue");
  }

  function clickReset() {
    setCorState("white");
  }

  function clickLogin() {
    setCarregando(true);
  }

  function toggleLogin() {
    setCarregando(!carregando);
  }

  return (
    // html css
    <main className={styles.main}>
      <button onClick={clickVermelho}>Red</button>
      <button onClick={clickVerde}>Green</button>
      <button onClick={clickBlue}>Blue</button>

      <div
        onClick={clickReset}
        className=""
        style={{
          width: "100px",
          height: "100px",
          borderWidth: "2px",
          borderColor: "black",
          borderStyle: "solid",
          backgroundColor: corState,
        }}
      ></div>
      {/* se carregando estiver true então aparece a palavra na tag p */}
      {carregando && <p>Carregando</p>}
      <button onClick={clickLogin}>Login</button>
      <button onClick={toggleLogin}>ToggleLogin</button>
    </main>
  );
}
