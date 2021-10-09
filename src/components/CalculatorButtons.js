import { Button, ButtonGroup, Row } from "react-bootstrap";

const handleClick = (value) => {

}

const CalculatorButtons = (props) => {
  return (
    <div>
      <Row>
        <ButtonGroup>
          <Button className="custom-btn func-button">CE</Button>
          <Button className="custom-btn func-button">AC</Button>
        </ButtonGroup>
      </Row>
      <Row>
        <ButtonGroup>
          <Button className="custom-btn" value="7">7</Button>
          <Button className="custom-btn" value="8">8</Button>
          <Button className="custom-btn" value="9">9</Button>
          <Button className="custom-btn func-button">/</Button>
        </ButtonGroup>
      </Row>
      <Row>
        <ButtonGroup>
          <Button className="custom-btn" value="4">4</Button>
          <Button className="custom-btn" value="5">5</Button>
          <Button className="custom-btn" value="6">6</Button>
          <Button className="custom-btn func-button">x</Button>
        </ButtonGroup>
      </Row>
      <Row>
        <ButtonGroup>
          <Button className="custom-btn" value="1">1</Button>
          <Button className="custom-btn" value="2">2</Button>
          <Button className="custom-btn" value="3">3</Button>
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
    </div>
  );
};

export default CalculatorButtons
