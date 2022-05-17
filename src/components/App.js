import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Die from "./Die";

export default function App() {
  function allNewDice() {
    const diceArray = [];
    for (let i = 0; i < 10; i++) {
      diceArray.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid(),
      });
    }
    return diceArray;
  }

  function holdDice(id) {
    setDiceArray((prevArray) => {
      return prevArray.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      });
    });
  }

  function rollDice() {
    setDiceArray((prevArray) => {
      return prevArray.map((die) => {
        return die.isHeld
          ? die
          : { ...die, value: Math.ceil(Math.random() * 6) };
      });
    });
  }

  const [diceArray, setDiceArray] = useState(allNewDice());

  const diceElements = diceArray.map((die) => {
    return (
      <Die
        key={die.id}
        value={die.value}
        isHeld={die.isHeld}
        onClick={() => holdDice(die.id)}
      />
    );
  });

  return (
    <main>
      <h1 className="title">Tenzies</h1>
      <p className="description">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="dice">{diceElements}</div>
      <button className="roll" onClick={rollDice}>
        Roll
      </button>
    </main>
  );
}
