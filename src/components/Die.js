import React from "react";

export default function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#59e391" : "#ffffff",
  };

  /*Generate die elemnt depending on value of die.
  This is to produce a die with the required number of spots
  and the appropriate classNames. The default is left as a
  die showing the numeric value*/

  let dieElement;

  switch (props.value) {
    case 1:
      dieElement = (
        <div className="die one" style={styles} onClick={props.onClick}>
          <span className="spots"></span>
        </div>
      );
      break;
    case 2:
      dieElement = (
        <div className="die two" style={styles} onClick={props.onClick}>
          <span className="spots"></span>
          <span className="spots"></span>
        </div>
      );
      break;
    case 3:
      dieElement = (
        <div className="die three" style={styles} onClick={props.onClick}>
          <span className="spots"></span>
          <span className="spots"></span>
          <span className="spots"></span>
        </div>
      );
      break;
    case 4:
      dieElement = (
        <div className="die four" style={styles} onClick={props.onClick}>
          <div className="column">
            <span className="spots"></span>
            <span className="spots"></span>
          </div>
          <div className="column">
            <span className="spots"></span>
            <span className="spots"></span>
          </div>
        </div>
      );
      break;
    case 5:
      dieElement = (
        <div className="die five" style={styles} onClick={props.onClick}>
          <div className="column">
            <span className="spots"></span>
            <span className="spots"></span>
          </div>
          <span className="spots"></span>
          <div className="column">
            <span className="spots"></span>
            <span className="spots"></span>
          </div>
        </div>
      );
      break;
    case 6:
      dieElement = (
        <div className="die six" style={styles} onClick={props.onClick}>
          <div className="column">
            <span className="spots"></span>
            <span className="spots"></span>
          </div>
          <div className="column">
            <span className="spots"></span>

            <span className="spots"></span>
          </div>
          <div className="column">
            <span className="spots"></span>
            <span className="spots"></span>
          </div>
        </div>
      );
      break;
    default:
      dieElement = (
        <div className="die" style={styles} onClick={props.onClick}>
          <span className="die__value">{props.value}</span>
        </div>
      );
  }

  return dieElement;
}
