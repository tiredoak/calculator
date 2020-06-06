import React, { useState } from "react";
import CalculatorButton from "./components/CalculatorButton";

const App = () => {
  const [expression, setExpression] = useState("");

  const updateExpression = (e) => {
    e.target.value === "="
      ? setExpression(eval(expression))
      : setExpression(expression + e.target.value);
  };

  return (
    <div>
      <div>Test</div>
      <CalculatorButton onClick={updateExpression} value={1}></CalculatorButton>
      <CalculatorButton onClick={updateExpression} value={2}></CalculatorButton>
      <CalculatorButton
        onClick={updateExpression}
        value={"+"}
      ></CalculatorButton>
      <CalculatorButton
        onClick={updateExpression}
        value={"="}
      ></CalculatorButton>
    </div>
  );
};

export default App;
