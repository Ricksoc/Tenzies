import React from "react";

export default function Die(props) {
  return (
    <div className="die">
      <span className="die__value">{props.value}</span>
    </div>
  );
}
