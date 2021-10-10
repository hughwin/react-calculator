import { Row } from "react-bootstrap";

const CalculatorScreen = (props) => {
  return (
    <div class="screen text-center">
      <Row id="output">
        <p>{props.sum}</p>
        <p>{props.log}</p>
      </Row>
    </div>
  );
};

export default CalculatorScreen;
