import { Row } from "react-bootstrap"

const CalculatorScreen = () => {
  return (
    <div class="screen text-center">
      <Row id="output" />
      <Row class="row" id="log" />
    </div>
  );
};

export default CalculatorScreen;
