import { useState } from "react";
import { Container, ThemeProvider } from "react-bootstrap";

import CalculatorScreen from "./components/CalculatorScreen";
import CalculatorButtons from "./components/CalculatorButtons";
import { act } from "react-dom/test-utils";

function App() {
  const [sum, setSum] = useState("");
  const [activeNumber, setActiveNumber] = useState("");
  const [secondaryNumber, setSecondaryNumber] = useState("");
  const [decimalApplied, setDecilmalApplied] = useState(false);
  const [operator, setOperator] = useState("");

  const setSumChange = (value) => {
    console.log(value);
    if (value === "." && !decimalApplied) {
      setDecilmalApplied(true);
      setActiveNumber(activeNumber + value);
    }
    if (value === "." && decimalApplied) return;
    if (value === "0" && activeNumber === "0") return;
    else setActiveNumber(activeNumber + value);
  };

  const clearEntry = () => {
    setActiveNumber(activeNumber.substring(0, activeNumber.length - 1));
    if (secondaryNumber !== "") {
      setSecondaryNumber("");
      setSum("");
    }
  };

  const clearAll = () => {
    setActiveNumber("");
    setSecondaryNumber("");
    setSum("");
    setDecilmalApplied(false);
  };

  const operatorClicked = (value) => {
    if (activeNumber === "" && value === "-") setActiveNumber("-");
    else {
      setSecondaryNumber(activeNumber);
      setActiveNumber("");
      setOperator(value);
      setSum(secondaryNumber + " " + value);
      setDecilmalApplied(false);
    }
  };

  const compute = () => {
    console.log("compute clicked... " + operator);
    if (operator === "*")
      setActiveNumber(String(Number(activeNumber) * Number(secondaryNumber)));
    if (operator === "/")
      setActiveNumber(String(Number(activeNumber) / Number(secondaryNumber)));
    if (operator === "+")
      setActiveNumber(String(Number(activeNumber) + Number(secondaryNumber)));
    if (operator === "-")
      setActiveNumber(String(Number(activeNumber) - Number(secondaryNumber)));
    setSum(secondaryNumber + " " + operator + " " + activeNumber);
    console.log(activeNumber);
    setSecondaryNumber("");
    setOperator("");
    setDecilmalApplied(false);
  };

  return (
    <div className="App calculator">
      <ThemeProvider prefixes={{ btn: "custom-btn " }}>
        <Container fluid>
          <CalculatorScreen sum={activeNumber} log={sum} />
          <CalculatorButtons
            setSumChange={setSumChange}
            clearEntry={clearEntry}
            clearAll={clearAll}
            operatorClicked={operatorClicked}
            compute={compute}
          />
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
