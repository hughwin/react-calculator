import { Row } from "react-bootstrap"

const CalculatorScreen = (props) => {
  console.log("rerender")
  return (
    <div class="screen text-center">
      <Row id="output">
        <p>{props.sum}</p>
        </Row>
      <Row class="row" id="log" />
    </div>
  );
};

export default CalculatorScreen;
