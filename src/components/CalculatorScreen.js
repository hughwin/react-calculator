import { Row } from "react-bootstrap";
import { Textfit } from "react-textfit";

const CalculatorScreen = (props) => {
  return (
    <div class="screen m-auto">
      <Row id="output">
        <Textfit mode="single" max={16}>
          <div>{props.log}</div>
          <div>{props.sum}</div>
        </Textfit>
      </Row>
    </div>
  );
};

export default CalculatorScreen;
