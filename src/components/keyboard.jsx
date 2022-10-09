import React from "react";

const Keyboard = ({ handleClick, clear, backspace, equalsTo }) => {
  return (
    <div>
      <div className="calcButton">
        <button className="greyHighlight" onClick={clear} id="clear">
          AC
        </button>
        <button
          className="greyHighlight"
          onClick={backspace}
          value= "backspace"
          id="insertsminus"
        >
          C
        </button>
        <button className="greyHighlight" onClick={handleClick}>
          %
        </button>
        <button value="/" className="highlight" onClick={handleClick}>
          &divide;
        </button>
        <button value="7" onClick={handleClick}>
          7
        </button>
        <button value="8" onClick={handleClick}>
          8
        </button>
        <button value="9" onClick={handleClick}>
          9
        </button>
        <button value="*" className="highlight" onClick={handleClick}>
          &times;
        </button>
        <button value="4" onClick={handleClick}>
          4
        </button>
        <button value="5" onClick={handleClick}>
          5
        </button>
        <button value="6" onClick={handleClick}>
          6
        </button>
        <button value="-" className="highlight" onClick={handleClick}>
          -
        </button>
        <button value="1" onClick={handleClick}>
          1
        </button>
        <button value="2" onClick={handleClick}>
          2
        </button>
        <button value="3" onClick={handleClick}>
          3
        </button>
        <button value="+" className="highlight" onClick={handleClick}>
          +
        </button>
        <button id="zero" value="0" onClick={handleClick}>
          0
        </button>
        <button value="." onClick={handleClick}>
          .
        </button>
        <button value="equalsTo" className="highlight" onClick={equalsTo}>
          =
        </button>
      </div>
    </div>
  );
};

export default Keyboard;
