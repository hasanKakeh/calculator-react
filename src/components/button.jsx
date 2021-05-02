import React from "react";
import "../App.css";
const Button = ({ char, onClick, value, ...rest }) => {
  return (
    <div
      /*text-center*/
      style={{
        height: "50px",
        boxSizing: "border-box",
        textAlign: "center",
        width: "100%",
        backgroundColor:
          char === "C" ? "#ff3077" : char === "=" ? "#03b1ff" : "#0c2538",
        JustifyContent: "center",
        border: "none !important",
        color: "#fff",
        borderRadius: 0,
      }}
      value={value}
      {...rest}
      onClick={onClick}
    >
      <p
        style={{
          position: "relative",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        {char}
      </p>
    </div>
  );
};

export default Button;
