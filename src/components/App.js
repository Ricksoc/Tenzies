import React, { useState, useEffect } from "react";
import Die from "./Die";

export default function App() {
  function allNewDice() {
    return Array.from({ length: 10 }, () => Math.ceil(Math.random() * 6));
  }

  const [diceValues, setDiceValues] = useState(allNewDice());

  const diceElements = diceValues.map((value, index) => {
    return <Die key={index} value={value} />;
  });

  const rollDice = () => setDiceValues(allNewDice());

  return (
    <main>
      <div className="dice">{diceElements}</div>
      <button className="roll" onClick={rollDice}>
        Roll
      </button>
    </main>
  );
}
