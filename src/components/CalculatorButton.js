import React from "react";

const CalculatorButton = (props) => {
  return (
    <button value={props.value} onClick={props.onClick}>
      {props.value}
    </button>
  );
};

export default CalculatorButton;
