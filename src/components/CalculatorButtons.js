import { Button, ButtonGroup, Row } from "react-bootstrap";

const CalculatorButtons = (props) => {
  const handleNumberPress = (event) => {
    let buttonValue = event.target.value;
    console.log(buttonValue);
    props.setSumChange(buttonValue);
  };

  const clearEntry = () => {
    props.clearEntry();
  };

  const clearAll = () => {
    props.clearAll();
  };

  const operatorClicked = (event) => {
    let buttonValue = event.target.value;
    props.operatorClicked(buttonValue);
  };

  const compute = () => {
    props.compute();
  };

  return (
    <div>
      <Row>
        <ButtonGroup>
          <Button className="custom-btn func-button" onClick={clearEntry}>
            CE
          </Button>
          <Button className="custom-btn func-button" onClick={clearAll}>
            AC
          </Button>
        </ButtonGroup>
      </Row>
      <Row>
        <ButtonGroup>
          <Button className="custom-btn" value="7" onClick={handleNumberPress}>
            7
          </Button>
          <Button className="custom-btn" value="8" onClick={handleNumberPress}>
            8
          </Button>
          <Button className="custom-btn" value="9" onClick={handleNumberPress}>
            9
          </Button>
          <Button
            className="custom-btn func-button"
            value="/"
            onClick={operatorClicked}
          >
            /
          </Button>
        </ButtonGroup>
      </Row>
      <Row>
        <ButtonGroup>
          <Button className="custom-btn" value="4" onClick={handleNumberPress}>
            4
          </Button>
          <Button className="custom-btn" value="5" onClick={handleNumberPress}>
            5
          </Button>
          <Button className="custom-btn" value="6" onClick={handleNumberPress}>
            6
          </Button>
          <Button
            className="custom-btn func-button"
            value="*"
            onClick={operatorClicked}
          >
            x
          </Button>
        </ButtonGroup>
      </Row>
      <Row>
        <ButtonGroup>
          <Button className="custom-btn" value="1" onClick={handleNumberPress}>
            1
          </Button>
          <Button className="custom-btn" value="2" onClick={handleNumberPress}>
            2
          </Button>
          <Button className="custom-btn" value="3" onClick={handleNumberPress}>
            3
          </Button>
          <Button
            className="custom-btn func-button"
            value="-"
            onClick={operatorClicked}
          >
            -
          </Button>
        </ButtonGroup>
      </Row>
      <Row>
        <ButtonGroup>
          <Button className="custom-btn" value="0" onClick={handleNumberPress}>
            0
          </Button>
          <Button
            className="custom-btn func-button"
            value="."
            onClick={handleNumberPress}
          >
            .
          </Button>
          <Button className="custom-btn func-button" onClick={compute}>
            =
          </Button>
          <Button
            className="custom-btn func-button"
            value="+"
            onClick={operatorClicked}
          >
            +
          </Button>
        </ButtonGroup>
      </Row>
    </div>
  );
};

export default CalculatorButtons;
