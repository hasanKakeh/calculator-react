import React from "react";
import "../App.css";

const getBackgroundColor = (char) => {
  return char === "C" ? "#ff3077" : char === "=" ? "#03b1ff" :char==="+"? "#0c2538":"#0c2538";
};
const Button = ({ char, ...rest }) => {
  return (
    <div
      /*text-center*/
      style={{
        height: char!=="+"?"50px":"",
        backgroundColor: getBackgroundColor(char),
        JustifyContent: "center",
        border: "none !important",
        color: "#fff",
        borderRadius: 0,
      }}
      {...rest}
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
