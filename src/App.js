import React, { useState } from "react";
import CalculatorButton from "./components/CalculatorButton";

const App = () => {
  const [expression, setExpression] = useState("");

  const updateExpression = (e) => {
    switch (e.target.value) {
      case "=":
        setExpression(eval(expression));
        break;
      case "AC":
        setExpression("");
        break;
      default:
        setExpression(expression + e.target.value);
    }
  };

  return (
    <div>
      <div>{expression}</div>
      <CalculatorButton onClick={updateExpression} value={1}></CalculatorButton>
      <CalculatorButton onClick={updateExpression} value={2}></CalculatorButton>
      <CalculatorButton onClick={updateExpression} value={3}></CalculatorButton>
      <CalculatorButton onClick={updateExpression} value={4}></CalculatorButton>
      <CalculatorButton onClick={updateExpression} value={5}></CalculatorButton>
      <CalculatorButton onClick={updateExpression} value={6}></CalculatorButton>
      <CalculatorButton onClick={updateExpression} value={7}></CalculatorButton>
      <CalculatorButton onClick={updateExpression} value={8}></CalculatorButton>
      <CalculatorButton onClick={updateExpression} value={9}></CalculatorButton>
      <CalculatorButton onClick={updateExpression} value={0}></CalculatorButton>
      <CalculatorButton
        onClick={updateExpression}
        value={"+"}
      ></CalculatorButton>
      <CalculatorButton
        onClick={updateExpression}
        value={"-"}
      ></CalculatorButton>
      <CalculatorButton
        onClick={updateExpression}
        value={"*"}
      ></CalculatorButton>
      <CalculatorButton
        onClick={updateExpression}
        value={"/"}
      ></CalculatorButton>
      <CalculatorButton
        onClick={updateExpression}
        value={"."}
      ></CalculatorButton>
      <CalculatorButton
        onClick={updateExpression}
        value={"="}
      ></CalculatorButton>
      <CalculatorButton
        onClick={updateExpression}
        value={"AC"}
      ></CalculatorButton>
    </div>
  );
};

export default App;
