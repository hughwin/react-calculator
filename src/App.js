import react, { useState } from "react";
import { Button, Row, Coulumn, Container, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import CalculatorScreen from "./components/CalculatorScreen";

function App() {
  const sum = useState(0);
  const numberOne = useState("");
  const numberTwo = useState("");

  return (
    <div className="App" class="calculator">
      <Container fluid>
        <CalculatorScreen />
      </Container>
    </div>
  );
}

export default App;
