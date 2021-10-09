import { useState } from "react";
import {
  Container,
  ThemeProvider,
} from "react-bootstrap";

import CalculatorScreen from "./components/CalculatorScreen";
import CalculatorButtons from "./components/CalculatorButtons"

function App() {
  const [sum, setSum] = useState(0)
  const [numberOne, setNumberOne] = useState("")
  const [numberTwo, setNumberTwo] = useState("")


  const setSumChange = (value) => {
    setSum(sum + value)
    console.log(sum)
  }

  return (
    <div className="App calculator">
      <ThemeProvider prefixes={{ btn: "custom-btn " }}>
        <Container fluid>
          <CalculatorScreen sum={sum}/>
          <CalculatorButtons setSumChange={setSumChange}/>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
