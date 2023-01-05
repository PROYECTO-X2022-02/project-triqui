import React from "react";

function Temporizador() {
  let contador = 10;
  let cambio = false;
  let player1 = "Le toca a tu rival";
  let player2 = "Te toca a ti";

  function restar() {
    contador = contador - 1;
    if (contador === 0) {
      finDelConteo();
      cambio = !cambio;
      if (cambio) {
        return console.log(player1);
      } else {
        return console.log(player2);
      }
    }
  }
  function finDelConteo() {
    contador = 10;
  }

  let temporizador = setInterval(() => {
    console.log(contador);
    restar();
  }, 1000);
  return <div>Hola</div>;
}

export default Temporizador;
