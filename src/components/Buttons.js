import React from "react";

const Buttons = ({ inputHandler, outputHandler }) => {
  return (
    <div className="buttons">
      <div className="buttonCol1">
        <div className="buttonRow">
          <button value="1" onClick={inputHandler}>
            1
          </button>
          <button value="2" onClick={inputHandler}>
            2
          </button>
          <button value="3" onClick={inputHandler}>
            3
          </button>
        </div>
        <div className="buttonRow">
          <button value="4" onClick={inputHandler}>
            4
          </button>
          <button value="5" onClick={inputHandler}>
            5
          </button>
          <button value="6" onClick={inputHandler}>
            6
          </button>
        </div>
        <div className="buttonRow">
          <button value="7" onClick={inputHandler}>
            7
          </button>
          <button value="8" onClick={inputHandler}>
            8
          </button>
          <button value="9" onClick={inputHandler}>
            9
          </button>
        </div>
        <div className="buttonRow space">
          <button value="0" id="space" onClick={inputHandler}>
            0
          </button>
          <button value="," onClick={inputHandler}>
            ,
          </button>
        </div>
      </div>
      <div className="buttonCol2">
        <div className="buttonRow">
          <button value="Math.sqrt" onClick={inputHandler}>
            sqrt
          </button>
          <button value="1/" onClick={inputHandler}>
            1/x
          </button>
          <button value="+" onClick={inputHandler}>
            +
          </button>
        </div>
        <div className="buttonRow">
          <button value="-" onClick={inputHandler}>
            -
          </button>
          <button value="*" onClick={inputHandler}>
            x
          </button>
          <button value="/" onClick={inputHandler}>
            /
          </button>
        </div>
        <div className="buttonRow">
          <button value="(" onClick={inputHandler}>
            (
          </button>
          <button value=")" onClick={inputHandler}>
            )
          </button>
          <button value="Math.pow(" onClick={inputHandler}>
            exp
          </button>
          <div className="buttonRow">
            <button value="del" onClick={inputHandler}>
              del
            </button>
            <button value="cls" onClick={inputHandler}>
              cls
            </button>
            <button value="calc" onClick={outputHandler}>
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buttons;
