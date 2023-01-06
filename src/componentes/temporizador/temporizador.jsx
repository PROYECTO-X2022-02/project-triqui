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
      if (cambio) {
        return console.log("Le toca a tu rival");
      } else {
        return console.log("Te toca a ti");
      }
    }
  }
  function finDelConteo() {
    setContador(10);
  }

  useEffect(() => {
    let temporizador = setInterval(() => {
      console.log(contador);
      restar();
    }, 1000);
    return () => {
      clearInterval(temporizador);
    };
  }, [contador]);

  return <div>{contador}</div>;
}

export default Temporizador;
