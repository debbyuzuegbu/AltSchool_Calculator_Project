import React from "react";

const Keyboard = ({ handleClick, clear, backspace, signClick, equalsTo, dotClick }) => {
  const buttonValues = [
    "AC",
    "C",
    "%",
    "/",
    7,
    8,
    9,
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
    "=",
  ];

  const button = buttonValues.map((item) => {
    return (
      <button
        className={
          item == "AC" || item == "C" || item == "%"
            ? "greyHighlight"
            : item == "/" ||
              item == "*" ||
              item == "-" ||
              item == "+" ||
              item == "="
            ? "highlight"
            : ""
        }

        id = {item == "0" ? "zero" : ""}

        onClick={
          item == "="
            ? equalsTo
            : item == "C"
            ? backspace
            : item == "AC"
            ? clear
            : item == "+" || item == "*" || item == "-" || item == "/" || item == "%"
            ? signClick
            : item == "." 
            ? dotClick
            : handleClick
        }
      >
        {item}
      </button>
    );
  });
  return (
    <div>
      <div className="calcButton">
        {button}
      </div>
    </div>
  );
};

export default Keyboard;
