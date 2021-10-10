import { useState } from "react";
import { Container, ThemeProvider } from "react-bootstrap";

import CalculatorScreen from "./components/CalculatorScreen";
import CalculatorButtons from "./components/CalculatorButtons";
import { act } from "react-dom/test-utils";

function App() {
  const [sum, setSum] = useState(0);
  const [activeNumber, setActiveNumber] = useState("");
  const [numberTwo, setNumberTwo] = useState("");
  const [decimalApplied, setDecilmalApplied] = useState(false);

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

  return (
    <div className="App calculator">
      <ThemeProvider prefixes={{ btn: "custom-btn " }}>
        <Container fluid>
          <CalculatorScreen sum={activeNumber} />
          <CalculatorButtons setSumChange={setSumChange} />
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
