import { useState } from "react";
import { Container, ThemeProvider } from "react-bootstrap";

import CalculatorScreen from "./components/CalculatorScreen";
import CalculatorButtons from "./components/CalculatorButtons";
import { act } from "react-dom/test-utils";

function App() {
  const [sum, setSum] = useState(0);
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
  };

  const clearAll = () => {
    setActiveNumber("");
    secondaryNumber("");
    setSum("");
    setDecilmalApplied(false);
  };

  const operatorClicked = (value) => {
    setSecondaryNumber(activeNumber);
    setActiveNumber("");
    setOperator(value);
    setSum(sum + " " + value);
    setDecilmalApplied(false);
  };

  return (
    <div className="App calculator">
      <ThemeProvider prefixes={{ btn: "custom-btn " }}>
        <Container fluid>
          <CalculatorScreen sum={activeNumber} />
          <CalculatorButtons
            setSumChange={setSumChange}
            clearEntry={clearEntry}
            clearAll={clearAll}
            operatorClicked={operatorClicked}
          />
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
