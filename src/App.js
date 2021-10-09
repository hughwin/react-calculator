import { useState } from "react";
import {
  Container,
  ThemeProvider,
} from "react-bootstrap";

import CalculatorScreen from "./components/CalculatorScreen";
import CalculatorButtons from "./components/CalculatorButtons"

function App() {
  const sum = useState(0);
  const [numberOne, setNumberOne] = useState("")
  const [numberTwo, setNumberTwo] = useState("")


  return (
    <div className="App calculator">
      <ThemeProvider prefixes={{ btn: "custom-btn " }}>
        <Container fluid>
          <CalculatorScreen sum={sum}/>
          <CalculatorButtons />
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
