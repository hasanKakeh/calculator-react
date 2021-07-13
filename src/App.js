import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { evaluate } from "mathjs";
import InputBorder from "./components/inputBorder";
import Display from "./components/display";
export const onClickContext = React.createContext();
class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      num1: "",
      num2: "",
      input: "",
      operator: "",
    };
  }
  RemoveLastItems(text) {
    return text.slice(0, -1);
  }
  Clear() {
    const { num1, num2, operator, input } = this.state;
    if (input) {
      const updateInput = this.RemoveLastItems(input);
      if (num2) {
        this.setState({ input: updateInput, num2: this.RemoveLastItems(num2) });
        return;
      }
      if (operator) {
        this.setState({
          input: updateInput,
          operator: this.RemoveLastItems(operator),
        });
        return;
      }
      if (num1) {
        this.setState({ input: updateInput, num1: this.RemoveLastItems(num1) });
        return;
      }
    }
  }
  onKeyPress(e) {
    var key = e.key;
    if (e.keyCode === 13) key = "=";
    const item = document.getElementById(key);

    if (item) item.click();
  }
  componentDidUnMount() {
    document.removeEventListener("keydown", (e) => this.onKeyPress(e), false);
  }
  componentDidMount() {
    document.addEventListener("keydown", (e) => this.onKeyPress(e), false);
  }
  // validate start with multi zero
  fixStartwithMultiZero(number) {
    if (number === "00") return "0";
    return number;
  }

  validateNumbers(text) {
    // fix this 3132. to 3132.0 to get number
    const toFixDotChar = "0";
    const expresionNumber = /^(-|\+)?(\d+|(\d+\.?\d*))$/g;
    // this don't effect on the result , just for check
    return (text + toFixDotChar).match(expresionNumber) ? true : false;
  }
  validateOperators(text) {
    const expresionOprations = /[-+*/]/g;
    return text.match(expresionOprations) ? true : false;
  }

  handleButtonClick(e) {
    const { innerText } = e.currentTarget;
    var { num1, num2, operator, input } = this.state;
    var temp = innerText;
    //to remove last input
    if (innerText === "C") {
      this.Clear();
      return;
    }
    // to get the result
    if (innerText === "=" && num2) {
      num1 = num1.endsWith(".") ? num1 + "0" : num1;
      num2 = num2.endsWith(".") ? num2 + "0" : num2;
      num1 = evaluate(num1 + operator + num2).toString();
      operator = "";
      num2 = "";
      input = num1;
      this.setState({ input, num1, operator, num2 });
      return;
    }
    //if the user input anther operator calcuate the result and but the result in num1
    if (num1 && num2 && this.validateOperators(innerText)) {
      num1 = evaluate(num1 + operator + num2).toString();
      operator = innerText;
      num2 = "";
      input = num1 + operator;
      this.setState({ input, num1, operator, num2 });
      return;
    }
    //if the input isn't operator then check and but them in the num1 or num2
    if (!operator) {
      temp = num1 + temp;
      if (this.validateNumbers(temp)) {
        num1 = temp;
        num1 = this.fixStartwithMultiZero(num1);
        input = num1;
        this.setState({ input, num1, operator, num2 });
        return;
      }
    } else {
      temp = num2 + temp;
      if (this.validateNumbers(temp)) {
        num2 = temp;
        num2 = this.fixStartwithMultiZero(num2);
        input += innerText;
        this.setState({ input, num1, operator, num2 });
        return;
      }
    }
    //if the input is operator and num1 is here to validate start with operator
    if (num1 && num1 !== "-" && this.validateOperators(innerText)) {
      operator =
        innerText === "-" && (operator === "/" || operator === "*")
          ? operator + innerText
          : innerText;
      input = num1 + operator;
      this.setState({ input, num1, operator, num2 });
      return;
    }
  }
  render() {
    return (
      <div
        className="container  mt-5"
        style={{ width: "300px", height: "auto" }}
      >
        <div className={" rounded border"}>
          <Display input={this.state.input} />
          <onClickContext.Provider value={(e) => this.handleButtonClick(e)}>
            <InputBorder />
          </onClickContext.Provider>
        </div>
      </div>
    );
  }
}

export default Calculator;
