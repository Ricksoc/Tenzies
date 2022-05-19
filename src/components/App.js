import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Confetti from "react-dom-confetti";
import Die from "./Die";

// Confetti package config
const config = {
  angle: 90,
  spread: 180,
  startVelocity: 40,
  elementCount: 70,
  dragFriction: 0.12,
  duration: 3000,
  stagger: 3,
  width: "10px",
  height: "10px",
  perspective: "500px",
  colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
};

export default function App() {
  // Create 10 new dice with random values between 1 and 6
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

  // Stop value of dice changing with rollDice
  function holdDice(id) {
    setDiceArray((prevArray) => {
      return prevArray.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      });
    });
  }

  // Change value of all dice for which isHeld = false
  function rollDice() {
    setNoRolls((prevRolls) => prevRolls + 1);
    setDiceArray((prevArray) => {
      return prevArray.map((die) => {
        return die.isHeld
          ? die
          : { ...die, value: Math.ceil(Math.random() * 6) };
      });
    });
  }

  function newGame() {
    setDiceArray(allNewDice());
    setTenzies(false);
    setNoRolls(0);
  }

  const [diceArray, setDiceArray] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false);
  const [noRolls, setNoRolls] = useState(0);

  // Check for win condition
  useEffect(() => {
    if (
      diceArray.every((die) => die.isHeld) &&
      diceArray.every((die) => die.value === diceArray[0].value)
    ) {
      setTenzies(true);
      console.log("You won!");
    }
  }, [diceArray]);

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
      <Confetti active={tenzies} config={config} />
      <h1 className="title">Tenzies</h1>
      <p className="description">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="dice">{diceElements}</div>
      <div className="rolls">
        <button className="roll" onClick={tenzies ? newGame : rollDice}>
          {tenzies ? "New Game" : "Roll"}
        </button>
        <div className="counter">
          <span className="counter__text">No Rolls: </span>
          <span className="counter__count">{noRolls}</span>
        </div>
      </div>
    </main>
  );
}
