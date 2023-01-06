import React from "react";
import Tablero from "./Tablero/Tablero";
import { useState } from "react";

const winnerPositions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const Index = () => {
  const [turn, setTurn] = useState("X");
  const [squares, setSquares] = useState(Array(9).fill(null));
/*   const [winnerPositions, setWinnerPositions] = useState([]); */
  const [score, setScore] = useState({
    X: 0,
    O: 0,
  });
  const checkWinner = (newSquares) => {
    for (let i = 0; i < winnerPositions.length; i) {
      const [a, b, c] = winnerPositions[i];
      if (
        newSquares[a] &&
        newSquares[a] === newSquares[b] &&
        newSquares[a] === newSquares[c]
      ) {
        // HAY UN GANADOR
        finGame(newSquares[a], winnerPositions[i])
        return;
      }
    }
    if (!newSquares.includes(null)) {
      // HAY UN EMPATE
      finGame(null, Array.from(Array(10).keys()))
      return
    }
    setTurn(turn === "X" ? "O" : "X");
  };
  const handleClick = (square) => {
    let newSquares = [...squares];
    newSquares.splice(square, 1, turn);
    setSquares(newSquares);
    checkWinner(newSquares);
  };
  const finGame = (resul, winnerPositions) => {
    setTurn(null);

  };
  return (
    <div>
      <Tablero turn={turn} squares={squares} onClick={handleClick} />
    </div>
  );
};

export default Index;
