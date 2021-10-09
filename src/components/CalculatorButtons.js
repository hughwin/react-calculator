import { Button, ButtonGroup, Row } from "react-bootstrap";

const CalculatorButtons = (props) => {

  const handleClick = (event) => {
    let buttonValue = event.target.value
    console.log(buttonValue)
    props.setSumChange(buttonValue)
  }

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
          <Button className="custom-btn" value="7" onClick={handleClick}>7</Button>
          <Button className="custom-btn" value="8" onClick={handleClick}>8</Button>
          <Button className="custom-btn" value="9" onClick={handleClick}>9</Button>
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
