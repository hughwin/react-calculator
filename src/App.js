import { useState } from "react";
import {
  Button,
  Row,
  Container,
  ButtonGroup,
  ThemeProvider,
} from "react-bootstrap";

import CalculatorScreen from "./components/CalculatorScreen";

function App() {
  const sum = useState(0);
  const numberOne = useState("");
  const numberTwo = useState("");

  return (
    <div className="App calculator">
      <ThemeProvider prefixes={{ btn: "custom-btn " }}>
        <Container fluid>
          <CalculatorScreen />
          <Row>
            <ButtonGroup>
              <Button className="custom-btn">(</Button>
              <Button className="custom-btn">)</Button>
              <Button className="custom-btn func-button">CE</Button>
              <Button className="custom-btn func-button">AC</Button>
            </ButtonGroup>
          </Row>
          <Row>
            <ButtonGroup>
              <Button className="custom-btn">7</Button>
              <Button className="custom-btn">8</Button>
              <Button className="custom-btn">9</Button>
              <Button className="custom-btn func-button">/</Button>
            </ButtonGroup>
          </Row>
          <Row>
            <ButtonGroup>
              <Button className="custom-btn">4</Button>
              <Button className="custom-btn">5</Button>
              <Button className="custom-btn">6</Button>
              <Button className="custom-btn func-button">x</Button>
            </ButtonGroup>
          </Row>
          <Row>
            <ButtonGroup>
              <Button className="custom-btn">1</Button>
              <Button className="custom-btn">2</Button>
              <Button className="custom-btn">3</Button>
              <Button className="custom-btn func-button">-</Button>
            </ButtonGroup>
          </Row>
          <Row>
            <ButtonGroup>
              <Button className="custom-btn">0</Button>
              <Button className="custom-btn func-button">.</Button>
              <Button className="custom-btn func-button">=</Button>
              <Button className="custom-btn func-button">+</Button>
            </ButtonGroup>
          </Row>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
