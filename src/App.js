import "./App.css";
import React, { Component } from "react";
import Button from "./components/button";
import "bootstrap/dist/css/bootstrap.css";
import { evaluate } from "mathjs";
import InputBorder from "./components/inputBorder";
import Display from "./components/display";

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      num1: "",
      num2: "",
      input: "0",
      stackInput: "0",
      operator: "",
      buttons: [
        [
          { char: "C", id: "clear" },
          { char: "/", id: "divide" },
          { char: "*", id: "multiply" },
        ],
        [
          { char: "7", id: "seven" },
          { char: "8", id: "eight" },
          { char: "9", id: "nine" },
          { char: "-", id: "subtract" },
        ],
        [
          [
            { char: "4", id: "four" },
            { char: "5", id: "five" },
            { char: "6", id: "six" },
          ],
          [
            { char: "1", id: "one" },
            { char: "2", id: "two" },
            { char: "3", id: "three" },
          ],
          { char: "+", id: "add" },
        ],
        [
          { char: "0", id: "zero" },
          { char: ".", id: "decimal" },
          { char: "=", id: "equals" },
        ],
      ],
      operators: ["+", "-", "*", "/"],
    };
  }
  Clear() {
    this.setState({
      num1: "",
      num2: "",
      stackInput: "0",
      input: "0",
      operator: "",
    });
  }
  onKeyPress(e) {
      var key = e.key;
    if ((e.keyCode=== 13)) key = "=";
    const item = document.getElementById(key);

    if (item) item.click();
  }
  componentDidMount() {
    document.addEventListener("keydown", this.onKeyPress, false);
  }
  componentDidMount() {
    document.addEventListener("keydown", (e) => this.onKeyPress(e), false);
  }

  handleClick(e) {
    // console.log(evaluate("2.1+23"));
    var { innerText } = e.currentTarget;
    var { operator, operators, num1, num2, stackInput } = this.state;
    var input;
    // console.log(operator);
    if (innerText === "C") {
      this.Clear();
      return;
    }
    if (innerText === ".") {
      num1 = num1 ? num1 : "0";
      //  if (stackInput.charAt(stackInput.length - 1) === ".") return;
      if (num1.includes(".") && !num2) return;
      if (num2.includes(".")) return;
      if (operator && !num2) return;
    }

    if (innerText === "=") {
      if (!num2) {
        input = num1 ? num1 : "0";
      } else {
        input = evaluate(num1 + operator + num2);
        num1 = input;
      }
      this.setState({
        num1,
        num2: "",
        input,
        stackInput: input,
        operator: "",
      });
      return;
    }
    if (operators.includes(innerText)) {
      if (num1) {
        operator =
          !operator || (operator && innerText !== "-")
            ? innerText
            : operator.length < 2
            ? operator + innerText
            : operator;
        if (num2) {
          num1 = evaluate(stackInput);
          num2 = "";
          operator = operator.length === 2 ? innerText : operator;
        }
        input = innerText;
        console.log(input);
      } else {
        input = innerText === "+" || innerText === "-" ? innerText : "";
        num1 = input;
      }
    } else {
      // if (num1.length > 12 || num2.length > 12) return;
      if (operator) {
        if (num2.length > 12) return;
        num2 += innerText;
        input = num2;
      } else {
        if (num1.length > 12) return;
        if (num1 === "0" && innerText === "0") return;
        num1 += innerText;
        input = num1;
      }
    }
    stackInput = num1 + operator + num2;
    console.log({ input, stackInput, operator, num1, num2 });
    //const input = c.exec("5+");

    this.setState({ input, stackInput, operator, num1, num2 });
  }
  render() {
    const { buttons, input, stackInput } = this.state;
    return (
      <div
        className="container  mt-5"
        style={{ width: "300px", height: "auto" }}
      >
        <div className={"rounded border"}>
          <Display input={input} stackInput={stackInput} />
          <InputBorder buttons={buttons} onClick={(e) => this.handleClick(e)} />
        </div>
      </div>
    );
  }
}

export default Calculator;
