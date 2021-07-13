import { onClickContext } from "../App";
import "./buttons.css"
const getBackgroundColor = (char) => {
  return char === "C" ? "#ff3077" : char === "=" ? "#03b1ff" : "#0c2538";
};
const Button = ({ char, bootstrapClasses, ...rest }) => {
  return (
    <onClickContext.Consumer>
      {(onClick) => (
        <button
          id={char}
          className={"event btn " + bootstrapClasses}
          style={{
            minHeight: "50px",
            backgroundColor: getBackgroundColor(char),
            borderRadius: 0,
            border: "none !important",
            color: "#fff",
          }}
          onClick={onClick}
        >
          {char}
        </button>
      )}
    </onClickContext.Consumer>
  );
};

export default Button;
