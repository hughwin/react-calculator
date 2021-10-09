import { Row } from "react-bootstrap"

const CalculatorScreen = (props) => {
  return (
    <div class="screen text-center">
      <Row id="output">
        <p>{props.sum[0]}</p>
        </Row>
      <Row class="row" id="log" />
    </div>
  );
};

export default CalculatorScreen;
