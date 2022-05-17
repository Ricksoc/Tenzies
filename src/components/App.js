import React, { useState, useEffect } from "react";
import Die from "./Die";

export default function App() {
  function allNewDice() {
    return Array.from({ length: 10 }, () => Math.ceil(Math.random() * 6));
  }

  const [diceValues, setDiceValues] = useState(allNewDice());

  const dice = diceValues.map((value, index) => {
    return <Die key={index} value={value} />;
  });

  return (
    <main>
      <div className="dice">{dice}</div>
    </main>
  );
}
