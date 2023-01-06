import React from "react";
import { useState, useEffect } from "react";

function Temporizador() {
  const [contador, setContador] = useState(10);
  const [cambio, setCambio] = useState(false);

  function restar() {
    setContador(contador - 1);
    if (contador === 0) {
      finDelConteo();
      setCambio(!cambio);
    }
  }
  function finDelConteo() {
    setContador(10);
  }

  useEffect(() => {
    let temporizador = setInterval(() => {
      restar();
    }, 1000);
    return () => {
      clearInterval(temporizador);
    };
  }, [contador]);

  return (
    <div>
      <h1>Countdown: {contador}</h1>
      {cambio ? (
        <>
          <p>Le toca a tu rival</p>
        </>
      ) : (
        <>
          <p>Te toca a ti</p>
        </>
      )}
    </div>
  );
}

export default Temporizador;
