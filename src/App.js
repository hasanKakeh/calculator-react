import "./App.css";
import React, { Component } from "react";
import Button from "./components/button";
import "bootstrap/dist/css/bootstrap.css";
import { evaluate } from "mathjs";

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      num1: "",
      num2: "",
      input: "0",
      stateInput: "0",
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
    };
  }

  handleClick(e) {
    // console.log(evaluate("2.1+23"));
    var { innerText } = e.currentTarget;
    var { operator, num1, num2, stateInput } = this.state;
    var input;
    console.log(operator);
    if (innerText === "C") {
      this.setState({
        num1: "",
        num2: "",
        stateInput: "0",
        input: "0",
        operator: "",
      });
      return;
    }

    if (innerText === ".") {
      num1 = num1 ? num1 : "0";
      if (stateInput.charAt(stateInput.length - 1) === ".") return;
      if (num1.includes(".")&&!num2) return;
      if(num2.includes("."))return;
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
        stateInput: input,
        operator: "",
      });
      return;
    }
    if (
      innerText === "-" ||
      innerText === "+" ||
      innerText === "/" ||
      innerText === "*"
    ) {
      if (num1) {
        operator =
          !operator || (operator && innerText !== "-")
            ? innerText
            : operator.length < 2
            ? operator + innerText
            : operator;
        if (num2) {
          num1 = evaluate(stateInput);
          num2 = "";
          operator = operator.length === 2 ? innerText : operator;
        }
        input = innerText;
        console.log(operator);
      } else {
        input = innerText === "+" || innerText === "-" ? innerText : "";
        num1 = input;
      }
    } else {
      if (operator) {
        num2 += innerText;
        input = num2;
      } else {
        if(num1==="0"&&innerText==="0")return
        num1 += innerText;
        input = num1;
      }
    }

    stateInput = num1 + operator + num2;
    console.log({ input, stateInput, operator, num1, num2 });
    //const input = c.exec("5+");

    this.setState({ input, stateInput, operator, num1, num2 });
  }
  render() {
    const { buttons } = this.state;
    return (
      <div
        className="container  mt-5"
        style={{ width: "300px", height: "auto" }}
      >
        <div className={"rounded border"}>
          <div
            className="border flex-end "
            style={{ width: "100%", minHeight: 85, backgroundColor: "#fff" }}
          >
            <p className="text-end text-break m-2" style={{ textAlign: "end" }}>
              {this.state.stateInput}
            </p>
            <h3
              id="display"
              className="text-end  m-2"
              style={{ textAlign: "end" }}
            >
              {this.state.input}
            </h3>
          </div>
          <div
            className="row rounded border "
            style={{ width: "100%", marginLeft: 0, marginRight: 0 }}
          >
            {buttons.map((r, i) => {
              if (i === 2) {
                return (
                  <div
                    key={i}
                    className="row mr-0 ml-0"
                    style={{ width: "100%" }}
                  >
                    <div className="col-9 pr-0 pl-0">
                      {r.slice(0, 2).map((row) => {
                        return row.map((c, i) => {
                          return (
                            <Button
                              key={i}
                              id={c.id}
                              onClick={(e) => this.handleClick(e)}
                              value={c.char}
                              className=" btn hover align-middle  col-4  "
                              char={c.char}
                            ></Button>
                          );
                        });
                      })}
                    </div>
                    <Button
                      id={r[2].id}
                      className=" btn hover  float-right  col-3"
                      onClick={(e) => this.handleClick(e)}
                      value={r[2].char}
                      style={{
                        backgroundColor: "#0c2538",
                        JustifyContent: "center",
                        color: "#fff",
                      }}
                      char={r[2].char}
                    ></Button>
                  </div>
                );
              }
              return r.map((c, i) => {
                return (
                  <Button
                    key={i}
                    id={c.id}
                    onClick={(e) => this.handleClick(e)}
                    value={c.char}
                    className={
                      c.char === "C" || c.char === "="
                        ? "  hover btn col-6 float-right"
                        : " hover btn col-3 float-right "
                    }
                    char={c.char}
                  ></Button>
                );
              });
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
