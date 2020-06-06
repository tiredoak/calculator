import React, { useState } from "react";
import CalculatorButton from "./components/CalculatorButton";

const App = () => {
  const [expression, setExpression] = useState("");
  let value = 1;

  return (
    <div>
      <div>Test</div>
      <button>
        <CalculatorButton value={value}></CalculatorButton>
      </button>
    </div>
  );
};

export default App;
