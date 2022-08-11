import React, { Component, useState } from "react";
import Buttons from "./Components/buttons";
import Result from "./Components/result";
import "./Components/calc.css";
/**this is the main class */

const App = () => {
  const [result, setResult] = useState(" ");
  const handleclicks = (value) => {
    switch (value) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case ".":
      case "+":
      case "-":
      case "/":
      case "*":
        if (result === "0") {
          setResult(value);
        } else {
          setResult(result + value);
        }
        break;
      case "=":
        console.log(result);
        setResult(eval(result));
        break;
      case "c":
        setResult("");
        break;
      case "+/-":
        setResult(parseInt(result, 10) * -1);
        break;
      case "%":
        setResult(parseFloat(result, 10) / 100);
        break;
      default:
        break;
    }
  };

  return (<div className="all">
    <div className="myCalculator">
      <Result result={result} /> <Buttons Buttonclicked={handleclicks} />{" "}
    </div></div>
  );
};

export default App;
